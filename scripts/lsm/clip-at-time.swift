import AVFoundation
import AppKit

guard CommandLine.arguments.count >= 3 else {
    fputs("Usage: clip-at-time <video.mp4> <seconds> <output.png>\n", stderr)
    exit(1)
}

let clip = CommandLine.arguments[1]
let sec = Double(CommandLine.arguments[2]) ?? 0
let out = CommandLine.arguments[3]

let asset = AVURLAsset(url: URL(fileURLWithPath: clip))
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = CMTime(seconds: 0.05, preferredTimescale: 600)
gen.requestedTimeToleranceAfter = CMTime(seconds: 0.05, preferredTimescale: 600)

var actual = CMTime.zero
guard let img = try? gen.copyCGImage(at: CMTime(seconds: sec, preferredTimescale: 600), actualTime: &actual) else {
    fputs("Error extracting frame\n", stderr)
    exit(1)
}

let rep = NSBitmapImageRep(cgImage: img)
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
let dur = CMTimeGetSeconds(asset.duration)
print(String(format: "OK clip=%.1fs at=%.2fs -> %@", dur, sec, out))
