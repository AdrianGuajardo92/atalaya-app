import AVFoundation
import AppKit
let clip = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : ""
let out = CommandLine.arguments.count > 2 ? CommandLine.arguments[2] : "qa.png"
let asset = AVURLAsset(url: URL(fileURLWithPath: clip))
let dur = CMTimeGetSeconds(asset.duration)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
var actual = CMTime.zero
if let img = try? gen.copyCGImage(at: CMTime(seconds: dur/2, preferredTimescale: 600), actualTime: &actual) {
    let rep = NSBitmapImageRep(cgImage: img)
    try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
    print("OK \(dur)s -> \(out)")
}
