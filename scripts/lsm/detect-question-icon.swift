import AVFoundation
import AppKit
import Foundation

/// Scan video for question-mark icon in bottom-right corner.
/// Usage: detect-question-icon <source.mp4> <output.csv> [calibrateSecond]
let args = CommandLine.arguments
guard args.count >= 3 else {
    fputs("Usage: detect-question-icon <source.mp4> <output.csv> [calibrateSecond]\n", stderr)
    exit(1)
}

let sourceURL = URL(fileURLWithPath: args[1])
let csvPath = args[2]
let calibrateSec = args.count > 3 ? Double(args[3]) ?? 18.0 : 18.0

let asset = AVURLAsset(url: sourceURL)
let duration = CMTimeGetSeconds(asset.duration)
guard duration.isFinite, duration > 0 else { exit(1) }

let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = CMTime(seconds: 0.05, preferredTimescale: 600)
gen.requestedTimeToleranceAfter = CMTime(seconds: 0.05, preferredTimescale: 600)

struct IconMetrics {
    let pngBytes: Int
    let lightRatio: Double
}

func iconCrop(_ img: CGImage) -> CGImage? {
    let w = Double(img.width), h = Double(img.height)
    // Small zone where the grey circle + ? appears (not the intro side panel)
    let rect = CGRect(x: w * 0.86, y: h * 0.82, width: w * 0.12, height: w * 0.12)
    return img.cropping(to: rect)
}

func metrics(from cg: CGImage) -> IconMetrics {
    let rep = NSBitmapImageRep(cgImage: cg)
    let pngBytes = rep.representation(using: .png, properties: [:])?.count ?? 0
    var light = 0, total = 0
    let w = cg.width, h = cg.height
    guard let data = cg.dataProvider?.data,
          let ptr = CFDataGetBytePtr(data) else {
        return IconMetrics(pngBytes: pngBytes, lightRatio: 0)
    }
    let bpp = cg.bitsPerPixel / 8
    let rowBytes = cg.bytesPerRow
    for y in 0..<h {
        for x in 0..<w {
            let off = y * rowBytes + x * bpp
            let r = Int(ptr[off]), g = Int(ptr[off + 1]), b = Int(ptr[off + 2])
            total += 1
            // grey circle + white ? = brighter than blue background
            if r > 100 && g > 100 && b > 100 { light += 1 }
        }
    }
    let ratio = total > 0 ? Double(light) / Double(total) : 0
    return IconMetrics(pngBytes: pngBytes, lightRatio: ratio)
}

func frame(at sec: Double) -> CGImage? {
    let t = CMTime(seconds: sec, preferredTimescale: 600)
    var actual = CMTime.zero
    return try? gen.copyCGImage(at: t, actualTime: &actual)
}

// Calibrate threshold from reference second (default 18s ≈ q01 with ?)
var calScore = 0.0
if let img = frame(at: calibrateSec), let crop = iconCrop(img) {
    let m = metrics(from: crop)
    calScore = Double(m.pngBytes) * 0.6 + m.lightRatio * 4000
    fputs(String(format: "Calibrate @ %.1fs: png=%d light=%.3f score=%.1f\n",
                 calibrateSec, m.pngBytes, m.lightRatio, calScore), stderr)
}

// Threshold: ~45% of calibration score, min floor
let threshold = max(800.0, calScore * 0.45)

var lines = ["second,hasIcon,score,pngBytes,lightRatio"]
let step = 0.5
var sec = 0.0
while sec <= duration {
    var hasIcon = false
    var score = 0.0
    var png = 0
    var light = 0.0
    if let img = frame(at: sec), let crop = iconCrop(img) {
        let m = metrics(from: crop)
        png = m.pngBytes
        light = m.lightRatio
        score = Double(png) * 0.6 + light * 4000
        // Exclude intro (0-13s): large side panel inflates metrics differently
        if sec >= 13.5 && score >= threshold && light >= 0.08 {
            hasIcon = true
        } else if sec >= 13.5 && png >= 900 && light >= 0.12 {
            hasIcon = true
        }
    }
    lines.append(String(format: "%.1f,%@,%.1f,%d,%.4f",
                        sec, hasIcon ? "1" : "0", score, png, light))
    sec += step
    if Int(sec * 2) % 120 == 0 { fputs("  ... \(Int(sec))s\n", stderr) }
}

try! lines.joined(separator: "\n").write(toFile: csvPath, atomically: true, encoding: .utf8)
fputs("Wrote \(lines.count - 1) rows, threshold=\(threshold)\n", stderr)
