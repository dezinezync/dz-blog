---
layout: post
title: "VMs, USB Signing Keys and Documents"
microblog: false
guid: http://dezinezync.micro.blog/2021/03/02/vms-usb-signing.html
date: 2021-03-02T08:08:25+0530
type: post
url: /2021/03/02/vms-usb-signing.html
---
As part of our compliance drive, we (my brother and I) looked into signing invoices for our family business using a DSC (Digital Signing Certificate) acquired from a Govt. recognised CA (Certificate Authority). 

Most of the systems in our house are running macOS. I infrequently use Windows for gaming whenever I make time for it. I had no intention of dual-booting into Windows simply to sign a few invoices every month. 

I spent an entire day trying to get the USB Token (ePass 2003 Auto) working on macOS Big Sur. This did not work. The software and drivers for this aren’t updated for Big Sur ( I wonder if they work on Catalina, not sure what the compatibility is like considering it requires Carbon!). I tried a bunch of drivers including ones from the Spanish Government (These keys are ubiquitous, everyone uses them apparently). Nothing worked. I finally gave up, uninstalled all the crappy software I had to install. 

The USB token comes with a partition that includes software for Windows, although the Vendor’s (Longmai) website claims macOS compatibility. </p>

So I looked into running Windows on a VM through VMWare Fusion. Once booted, I plugged in the USB token which refused to be detected by the VM until I added `usb.generic.keepStreamsEnabled = “FALSE”` to the VM's vmx file. After restarting the VM, the token was immediately detected, I installed the software and everything was working. 

Now to actually sign the software, the Govt. of India recommends some mSigner software however that requires Java. I wasn't going to fall for that trick again. Installing Java invites you to receive a thousand prompts to update it every month. Not happening. 

So I did what any sane person would do. Expose my VM to Adobe. Adobe's Acrobat Reader is fully capable of signing documents using a Cyrpto USB Token connected to the computer (or a VM as in this case). 

mSigner is capable of batch signing documents you chug into a folder. Adobe's Acrobat Reader cannot do this (or not that I know of, if you do, I'd love to hear about it). It took me longer to email these invoices than to sign them. That's the next part of our efforts: to automate the emailing process of these invoices. 
