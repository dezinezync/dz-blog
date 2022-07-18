---
layout: post
microblog: true
guid: http://dezinezync.micro.blog/2021/07/06/back-when-i.html
date: 2021-07-06T12:19:04+0530
type: post
url: /2021/07/06/back-when-i.html
---
Back when I first started working on Elytra (circa 2016), I realised that an iOS bug caused a UIScrollView to incorrectly adapt to changing the contentInsets at runtime. 

I was able to figure this out, a workaround and as usual, a closed radar. 

This bug remained present up until iOS 14.5 and with the addition of additionalSafeAreaInsets, the workaround became simpler. 

However, with iOS 15, the bug was patched either in Beta 1 or 2 and caused the entire Article Reader to go bonkers! I had no clue what happened. 

I was clueless because I forgot to add comments to my workaround about the bug. I looked through the entire Article Reader codebase trying to figure out what happened here. I've so far spent 4 days trying to figure this out. 

Until a few minutes ago when it just dawned on my stupid *** what was happening. I'm not exaggerating. Disabling my workaround makes everything work as expected albeit needing minor adjustments. 

What I'm trying to outline here is: Always add comments about the bug, a link to the bug tracker issue, a note about the workaround you're employing and how it works. 

I personally also prefer mentioning the iOS version or the SDK version I'm building with so I can check whenever a new SDK version is out if the workaround is still necessary. 
