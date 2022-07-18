---
layout: post
title: "macOS Development"
microblog: false
guid: http://dezinezync.micro.blog/2021/08/16/macos-development.html
date: 2021-08-16T12:57:00+0530
type: post
url: /2021/08/16/macos-development.html
---
Today marks the first full month since I began work on a new app. I started it off last week (after 3 weeks of designing layouts for iOS and macOS) using the multi-platform app template in Xcode. I quickly realised the limitation, a pure SwiftUI view architecture would bring, so I switched it out for a traditional AppDelegate based system on both platforms.

I decided to do something different time this. I had made a prototype app two years ago in my free time to test out the idea. I personally found it useful, showed it to a few friends & family and got feedback from them. So instead of starting off with the iOS app, I decided to first work on the Mac app instead.

I wish I had known before how easy it was to get going. A lot of things I’ve learnt over the years with developing with UIKit obviously apply here, but some interesting bits like `NSGridView`, Bindings and `representedObject` on Windows and ViewControllers make life so much simpler. Why aren't any of these things present in UIKit land? Especially bindings! 

`representedObject` is definitely something I plan to bring over to the iOS app vide a simple category on UIViewController. But `NSGridView` and Bindings are not things I plan to implement myself. I don't think there is a potential use-case for the grid view either, but I would love to have bindings. And before any one says it, Combine is not the same thing. 

---

A footnote I wanted to include is how much simpler things are for me with Swift. I still love using Objective-C where ever it makes sense now, but this project so far is all Swift. Elytra is a healthy mix of both and I don't see myself fully replacing ObjC in it anytime soon. 

---

This post is absolutely not in response to the recent "Electron apps" thing going on on Twitter. Things just happened to coincide and that's it. I think. ☺️
