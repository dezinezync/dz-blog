---
layout: post
title: "RPC Pings for Micro.blog"
microblog: false
guid: http://dezinezync.micro.blog/2019/11/07/rpc-pings-for.html
date: 2019-11-07T18:25:49+0530
type: post
categories:
- "technical"
url: /2019/11/07/rpc-pings-for.html
---
A couple of weeks ago, I [asked](https://twitter.com/dezinezync/status/1176340310693240832) [@manton](https://micro.blog/manton) if he had any plans of adding WebSub support on Micro.blog. While he is interested, I wanted to get a jump-start for my app [Elytra](https://elytra.app). 

Elytra supports WebSub as well as RPC style pings. So I made a 3-step Shortcut that fetches data from a [xml](https://www.icloud.com/iclouddrive/05-6TL_8X2JsqOHQ6l0r9adZg#dz) file and then calls the Elytra API URL to handle the RPC ping. This file is preloaded with information about my microblog.  

You can download the shortcut [here](https://www.icloud.com/shortcuts/73a1df6cdbe3411d8cb69b8ac517e8ee).  Remember to change the contents of the xml file if you plan to use it. You can adapt this to send RPC pings to other services too. 

Now I just need to figure out how I can automate this process when using Icro or the Micro.blog iOS app after I submit a new post. If you have tips on that, please let me know. 
