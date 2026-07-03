import AVFoundation
import AppKit
import Foundation
import Vision

struct ParagraphSegment: Codable {
    let num: Int
    let start: Double
    let end: Double
}

struct QuestionSegment: Codable {
    let num: String
    let start: Double
    let end: Double
}

struct SegmentsOutput: Codable {
    let duration: Double
    let paragraphs: [ParagraphSegment]
    let questions: [QuestionSegment]
}

func usage() -> Never {
    fputs("Usage: detect-segments <source.mp4> <output.json>\n", stderr)
    exit(1)
}

guard CommandLine.arguments.count >= 3 else { usage() }

let sourcePath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]
let sourceURL = URL(fileURLWithPath: sourcePath)

let asset = AVURLAsset(url: sourceURL)
let durationSeconds = CMTimeGetSeconds(asset.duration)
guard durationSeconds.isFinite, durationSeconds > 0 else {
    fputs("Error: invalid video duration\n", stderr)
    exit(1)
}

let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = CMTime(seconds: 0.1, preferredTimescale: 600)
generator.requestedTimeToleranceAfter = CMTime(seconds: 0.1, preferredTimescale: 600)

let bookKeywords = [
    "prov", "mateo", "cor", "gen", "efes", "sal", "tim", "ecl", "hech", "mar",
    "fil", "is ", "is.", "col", "amos", "mal", "lee", "sant", "job", "luc",
    "1 cor", "2 cor", "1 tim", "1 tes", "2 tim", "apoc", "numer", "deut",
]

enum FrameKind {
    case unknown
    case intro
    case question
    case paragraph(Int)
}

func cropRegion(_ image: CGImage, xRatio: Double, yRatio: Double, wRatio: Double, hRatio: Double) -> CGImage? {
    let w = Double(image.width)
    let h = Double(image.height)
    let rect = CGRect(x: w * xRatio, y: h * yRatio, width: w * wRatio, height: h * hRatio)
    return image.cropping(to: rect)
}

func ocrText(from cgImage: CGImage) -> String {
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = false
    request.recognitionLanguages = ["es-MX", "en-US"]

    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    do {
        try handler.perform([request])
    } catch {
        return ""
    }
    return request.results?
        .compactMap { $0.topCandidates(1).first?.string }
        .joined(separator: " ")
        .trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
}

func classifyTopLeft(_ text: String) -> FrameKind {
    if text.isEmpty { return .unknown }
    let lower = text.lowercased()
    let letters = text.filter { $0.isLetter }
    let digits = text.filter { $0.isNumber }

    if letters.isEmpty, let n = Int(String(digits.prefix(2))), n >= 1, n <= 17 {
        return .paragraph(n)
    }
    if bookKeywords.contains(where: { lower.contains($0) }) {
        return .question
    }
    if digits.isEmpty && letters.count > 2 {
        return .question
    }
    if let n = Int(String(digits.prefix(2))), n >= 1, n <= 17, letters.count <= 2 {
        return .paragraph(n)
    }
    return .unknown
}

func bottomRightScore(from cgImage: CGImage) -> Int {
    let rep = NSBitmapImageRep(cgImage: cgImage)
    guard let data = rep.representation(using: .png, properties: [:]) else { return 0 }
    return data.count
}

let totalSeconds = Int(floor(durationSeconds))
var kindAtSecond: [FrameKind] = Array(repeating: .unknown, count: totalSeconds + 1)
var brScoreAtSecond: [Int] = Array(repeating: 0, count: totalSeconds + 1)

fputs("Scanning \(totalSeconds + 1)s...\n", stderr)

for second in 0...totalSeconds {
    let time = CMTime(seconds: Double(second), preferredTimescale: 600)
    var actualTime = CMTime.zero
    do {
        let cgImage = try generator.copyCGImage(at: time, actualTime: &actualTime)
        if let topLeft = cropRegion(cgImage, xRatio: 0.0, yRatio: 0.0, wRatio: 0.20, hRatio: 0.16) {
            kindAtSecond[second] = classifyTopLeft(ocrText(from: topLeft))
        }
        if let bottomRight = cropRegion(cgImage, xRatio: 0.78, yRatio: 0.78, wRatio: 0.22, hRatio: 0.22) {
            brScoreAtSecond[second] = bottomRightScore(from: bottomRight)
        }
    } catch {
        continue
    }
    if second % 120 == 0 {
        fputs("  ... \(second)s\n", stderr)
    }
}

// Smooth paragraph numbers: 3-second mode
var paraAtSecond: [Int?] = Array(repeating: nil, count: totalSeconds + 1)
for second in 0...totalSeconds {
    if case .paragraph(let n) = kindAtSecond[second] {
        paraAtSecond[second] = n
    }
}

var smoothed: [Int] = Array(repeating: 1, count: totalSeconds + 1)
for second in 0...totalSeconds {
    var counts: [Int: Int] = [:]
    for w in max(0, second - 2)...min(totalSeconds, second + 2) {
        if let p = paraAtSecond[w] { counts[p, default: 0] += 1 }
    }
    if let best = counts.max(by: { $0.value < $1.value })?.key {
        smoothed[second] = best
    } else if second > 0 {
        smoothed[second] = smoothed[second - 1]
    }
}

// Fill gaps: carry last known paragraph when in paragraph content (not question/intro)
var lastPara = 1
for second in 0...totalSeconds {
    if case .paragraph = kindAtSecond[second] {
        lastPara = smoothed[second]
        smoothed[second] = lastPara
    } else if case .question = kindAtSecond[second] {
        // keep for question detection
    } else if paraAtSecond[second] != nil {
        lastPara = smoothed[second]
    } else {
        smoothed[second] = lastPara
    }
}

// Build paragraph segments from smoothed changes (min 8s duration to avoid OCR flicker)
var paragraphSegments: [ParagraphSegment] = []
var currentPara = smoothed[0]
var paraStart = 0.0
let minParaDuration = 8.0

for second in 1...totalSeconds {
    let p = smoothed[second]
    if p != currentPara {
        let dur = Double(second) - paraStart
        if dur >= minParaDuration || paragraphSegments.isEmpty {
            paragraphSegments.append(ParagraphSegment(num: currentPara, start: paraStart, end: Double(second)))
            currentPara = p
            paraStart = Double(second)
        }
    }
}
paragraphSegments.append(ParagraphSegment(num: currentPara, start: paraStart, end: durationSeconds))

// Normalize to exactly 17 paragraphs by merging/splitting if needed
if paragraphSegments.count != 17 {
    fputs("Post-process: \(paragraphSegments.count) segments -> normalize to 17\n", stderr)
    // Rebuild from change points with shorter min duration
    paragraphSegments = []
    currentPara = smoothed[0]
    paraStart = 0.0
    for second in 1...totalSeconds {
        if smoothed[second] != currentPara {
            paragraphSegments.append(ParagraphSegment(num: currentPara, start: paraStart, end: Double(second)))
            currentPara = smoothed[second]
            paraStart = Double(second)
        }
    }
    paragraphSegments.append(ParagraphSegment(num: currentPara, start: paraStart, end: durationSeconds))

    // Fix numbering to 1..17 sequentially by order
    var fixed: [ParagraphSegment] = []
    for (i, seg) in paragraphSegments.enumerated() {
        let num = min(i + 1, 17)
        fixed.append(ParagraphSegment(num: num, start: seg.start, end: seg.end))
    }
    paragraphSegments = fixed

    if paragraphSegments.count > 17 {
        paragraphSegments = Array(paragraphSegments.prefix(17))
        if var last = paragraphSegments.last {
            last = ParagraphSegment(num: 17, start: last.start, end: durationSeconds)
            paragraphSegments[16] = last
        }
    }
    while paragraphSegments.count < 17 {
        let idx = paragraphSegments.count
        let prevEnd = paragraphSegments.last?.end ?? 0
        paragraphSegments.append(ParagraphSegment(num: idx + 1, start: prevEnd, end: durationSeconds))
    }
}

// Question segments: book ref in top-left OR ? icon in bottom-right
let qThreshold = 480
var questionSegments: [QuestionSegment] = []
let qKeys = ["1", "2", "3-4", "5", "6-7", "8-9", "10", "11", "12-13", "14-15", "16", "17"]
// Actually 17 questions - map after detection
var inQuestion = false
var qStart = 0.0
var qIdx = 0

func questionLabel(_ index: Int) -> String {
    switch index {
    case 2: return "3-4"
    case 4: return "6-7"
    case 6: return "8-9"
    case 10: return "12-13"
    case 12: return "14-15"
    default: return "\(index + 1)"
    }
}

for second in 0...totalSeconds {
    let isQ = {
        if case .question = kindAtSecond[second] { return true }
        if brScoreAtSecond[second] > qThreshold { return true }
        return false
    }()
    if isQ && !inQuestion {
        inQuestion = true
        qStart = Double(second)
    } else if !isQ && inQuestion {
        inQuestion = false
        if qIdx < 17 {
            questionSegments.append(QuestionSegment(num: questionLabel(qIdx), start: qStart, end: Double(second)))
            qIdx += 1
        }
    }
}
if inQuestion && qIdx < 17 {
    questionSegments.append(QuestionSegment(num: questionLabel(qIdx), start: qStart, end: durationSeconds))
    qIdx += 1
}

// If too few questions detected, derive from paragraph boundaries (question usually precedes paragraph)
if questionSegments.count < 10 {
    fputs("Deriving question segments from paragraph starts\n", stderr)
    questionSegments = []
    let paraStarts = paragraphSegments.map { $0.start }
    for i in 0..<17 {
        let start = i == 0 ? 0.0 : max(0, paraStarts[i] - 15.0)
        let end = i < paraStarts.count ? paraStarts[i] : (i + 1 < paraStarts.count ? paraStarts[i + 1] : durationSeconds)
        let qEnd = min(end, start + 18.0)
        if qEnd - start >= 2 {
            questionSegments.append(QuestionSegment(num: questionLabel(i), start: start, end: qEnd))
        }
    }
}

let output = SegmentsOutput(
    duration: durationSeconds,
    paragraphs: paragraphSegments,
    questions: questionSegments
)

let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
do {
    let data = try encoder.encode(output)
    try data.write(to: URL(fileURLWithPath: outputPath))
    fputs("Wrote \(paragraphSegments.count) paragraphs, \(questionSegments.count) questions\n", stderr)
    for p in paragraphSegments {
        fputs(String(format: "  P%d: %.1f-%.1f (%.1fs)\n", p.num, p.start, p.end, p.end - p.start), stderr)
    }
} catch {
    fputs("Error: \(error)\n", stderr)
    exit(1)
}
