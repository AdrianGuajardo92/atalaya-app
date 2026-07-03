#!/usr/bin/env swift
import AVFoundation
import AppKit
import Foundation
import Vision

let source = URL(fileURLWithPath: CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4")
let asset = AVURLAsset(url: source)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
let duration = Int(CMTimeGetSeconds(asset.duration))

func ocr(_ cg: CGImage) -> String {
    let req = VNRecognizeTextRequest()
    req.recognitionLevel = .accurate
    req.usesLanguageCorrection = false
    let h = VNImageRequestHandler(cgImage: cg, options: [:])
    try? h.perform([req])
    return req.results?.compactMap { $0.topCandidates(1).first?.string }.joined(separator: " ") ?? ""
}

func brSize(_ cg: CGImage) -> Int {
    let rep = NSBitmapImageRep(cgImage: cg)
    return rep.representation(using: .png, properties: [:])?.count ?? 0
}

let bookWords = ["prov", "mateo", "cor", "gen", "efes", "sal", "tim", "ecl", "hech", "mar", "fil", "is ", "col", "amos", "mal", "lee", "sant", "job", "luc", "1 cor", "2 cor", "1 tim", "1 tes"]

var ok = 0, fail = 0
for sec in stride(from: 0, through: min(duration, 820), by: 2) {
    let t = CMTime(seconds: Double(sec), preferredTimescale: 600)
    var actual = CMTime.zero
    guard let img = try? gen.copyCGImage(at: t, actualTime: &actual) else { fail += 1; continue }
    ok += 1
    let w = Double(img.width), h = Double(img.height)
    let tlRect = CGRect(x: 0, y: 0, width: w * 0.20, height: h * 0.16)
    let brRect = CGRect(x: w * 0.78, y: h * 0.78, width: w * 0.22, height: h * 0.22)
    guard let tl = img.cropping(to: tlRect), let br = img.cropping(to: brRect) else { continue }
    let text = ocr(tl).trimmingCharacters(in: .whitespacesAndNewlines)
    let lower = text.lowercased()
    let digitsOnly = text.filter { $0.isNumber }
    var kind = "?"
    if let n = Int(digitsOnly), n >= 1, n <= 17, text.filter({ $0.isLetter }).isEmpty || text.count <= 3 {
        kind = "P\(n)"
    } else if bookWords.contains(where: { lower.contains($0) }) {
        kind = "Q"
    } else if text.isEmpty {
        kind = "-"
    }
    let brs = brSize(br)
    let qmark = brs > 500 ? "?" : " "
    print(String(format: "%4d  %-4s  TL=%-28s  BR=%4d %@", sec, kind, text, brs, qmark))
}
fputs("frames ok=\(ok) fail=\(fail) duration=\(duration)\n", stderr)
