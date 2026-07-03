import AVFoundation
import AppKit
import Foundation
import Vision

let source = URL(fileURLWithPath: CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4")
let outCsv = CommandLine.arguments.count > 2 ? CommandLine.arguments[2] : "scan.csv"

let asset = AVURLAsset(url: source)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
let total = Int(CMTimeGetSeconds(asset.duration))

let books = ["prov", "mateo", "cor", "gen", "efes", "sal", "tim", "ecl", "hech", "mar", "fil", "col", "amos", "mal", "lee", "sant", "is ", "1 cor", "2 cor"]

func ocr(_ cg: CGImage) -> String {
    let req = VNRecognizeTextRequest()
    req.recognitionLevel = .accurate
    req.usesLanguageCorrection = false
    let h = VNImageRequestHandler(cgImage: cg, options: [:])
    try? h.perform([req])
    return req.results?.compactMap { $0.topCandidates(1).first?.string }.joined(separator: " ") ?? ""
}

var lines: [String] = ["second,para,question,br,tl"]
for sec in stride(from: 0, through: total, by: 1) {
    let t = CMTime(seconds: Double(sec), preferredTimescale: 600)
    var actual = CMTime.zero
    guard let img = try? gen.copyCGImage(at: t, actualTime: &actual) else { continue }
    let w = Double(img.width), h = Double(img.height)
    guard let tl = img.cropping(to: CGRect(x: 0, y: 0, width: w*0.20, height: h*0.16)),
          let br = img.cropping(to: CGRect(x: w*0.78, y: h*0.78, width: w*0.22, height: h*0.22)) else { continue }
    let text = ocr(tl).trimmingCharacters(in: .whitespacesAndNewlines)
    let lower = text.lowercased()
    let digits = text.filter { $0.isNumber }
    var para = 0
    if let n = Int(String(digits.prefix(2))), n >= 1, n <= 17, text.filter({ $0.isLetter }).count <= 1 {
        para = n
    }
    let isQ = books.contains { lower.contains($0) } ? 1 : 0
    let rep = NSBitmapImageRep(cgImage: br)
    let brSize = rep.representation(using: .png, properties: [:])?.count ?? 0
    let esc = text.replacingOccurrences(of: ",", with: ";")
    lines.append("\(sec),\(para),\(isQ),\(brSize),\(esc)")
    if sec % 120 == 0 { fputs("... \(sec)s\n", stderr) }
}

try! lines.joined(separator: "\n").write(toFile: outCsv, atomically: true, encoding: .utf8)
fputs("Wrote \(lines.count - 1) rows to \(outCsv)\n", stderr)
