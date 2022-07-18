---
layout: post
microblog: true
guid: http://dezinezync.micro.blog/2022/05/16/a-fun-exercise.html
date: 2022-05-16T19:47:47+0530
type: post
url: /2022/05/16/a-fun-exercise.html
---
A fun exercise during this migration was to create a *async* delegate for `UIDocumentPickerController` to return the selected URLs or throw an error based on the delegate methods invoked. 

You can weakly reference the continuation token from `withCheckedContinuation` and call its respective methods. 

Not intuitive at first, but once you get it working, composing other similar delegates becomes natural. 
