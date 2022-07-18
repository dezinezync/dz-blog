---
layout: post
microblog: true
guid: http://dezinezync.micro.blog/2022/04/18/some-additional-notes.html
date: 2022-04-18T12:28:25+0530
type: post
url: /2022/04/18/some-additional-notes.html
---
Some additional notes on my [Studio Display post](https://dezinezync.com/2022/04/18/apple-studio-display.html) I posted earlier today:

#### Thunderbolt 3
I baffles me as to why Apple chose to use two DisplayPort 1.2 streams instead of a single DisplayPort 1.4 stream on supported Thunderbolt 3 controllers. 

My MacBook Pro 14" will use a single DP 1.4 stream, but my Hackintosh will use two DP 1.2 streams. The [Intel JHL7540](https://www.intel.com/content/www/us/en/products/sku/97400/intel-jhl7540-thunderbolt-3-controller/specifications.html) does support DP1.4 streams but the Studio Display will instead choose to complete the handshake using two DP1.2 steams. 
