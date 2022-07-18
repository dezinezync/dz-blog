---
layout: post
title: "On Fastlane, Notarization and Auto-Depolyment"
microblog: false
guid: http://dezinezync.micro.blog/2021/08/26/on-fastlane-notarization.html
date: 2021-08-26T11:57:09+0530
type: post
categories:
- "technical"
url: /2021/08/26/on-fastlane-notarization.html
---
Fastlane's latest updates for notarization of mac apps (including the new notarytool) has led me to create a sample [Fastfile](https://gist.github.com/dezinezync/6afe37a6f65ccad9b9a19a9ef98fb978). 

I've further expanded this sample to also create a Sparkle appcast but it's a lot of `sh` actions which are all relative to my project's setup. 

What I don't currently have is a lane that further syncs the releases folder (with the build archives and the `appcast.xml` file) to an S3 bucket or something similar. If you have any tips for me, I'd love to hear.
