---
title: "3d printing"
date: 2021-07-12T00:02:26-05:00
# bookComments: false
# bookSearchExclude: false
---

The ender 3 v2 is a good machine for getting started in 3d printing. To get solid, consistent prints you need to take a few extra steps after assembling:
1. Install a [bl-touch](https://www.youtube.com/watch?v=NDe6QXreBNs).
2. Set up a raspberry pi with [octoprint](https://octoprint.org/). (Optional)

{{< hint danger >}}
**Connecting your printer to your pi**  
Turns out there's some issue with voltages that causes some wonkiness if you just use a normal usb a to micro usb cable when connecting your printer to your pi. I followed [this comment](https://www.reddit.com/r/3Dprinting/comments/9l2hw8/why_ender_3_lcd_stays_on_even_when_printer_is/e745mza/) about covering the 5v pin and everything worked out from there. 
{{< /hint >}}

Like I have mentioned before I try to promote open source software whenever possible. So starting off I began modeling using [FreeCAD](https://www.freecadweb.org/) which is an amazing, free, open source 3d modeling tool. This made me appreciate a lot of the basics and gave me a good foundation to work from when evaluating new CAD tools. From there I moved on to using Fusion360 which needs no advertisement. The ergonomics are just too nice to go back.