import AVFoundation
import AppKit
let args = CommandLine.arguments.dropFirst()
let source = URL(fileURLWithPath: "/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4")
let gen = AVAssetImageGenerator(asset: AVURLAsset(url: source))
gen.appliesPreferredTrackTransform = true
let outDir = URL(fileURLWithPath: CommandLine.arguments.last ?? ".")
for a in args.dropLast() {
    guard let sec = Double(a) else { continue }
    var actual = CMTime.zero
    guard let img = try? gen.copyCGImage(at: CMTime(seconds: sec, preferredTimescale: 600), actualTime: &actual) else { continue }
    let rep = NSBitmapImageRep(cgImage: img)
    if let data = rep.representation(using: .png, properties: [:]) {
        try? data.write(to: outDir.appendingPathComponent("check-\(Int(sec)).png"))
        print("check-\(Int(sec)).png")
    }
}
