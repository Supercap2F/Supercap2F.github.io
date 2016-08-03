---
layout: post
title: Homemade PCBs with a Brother Printer - 4mil Traces
description: "Making hi-res PCBs with a Brother laser printer"
modified: 2016-7-19
tags: [PCB, Electronics, BrotherPrinter]
image:
  feature: posts/Homemade-PCBs/pcb-etch.jpg
  credit:
  creditlink:
---
Homemade PCBs with a Brother Printer - 4mil Traces

So I've done a bunch of tests with different paper, and the best paper I found for the job was this yellow stuff off of ebay <a href="http://ebay.to/1V9jXQ4">here</a>. I think this is the key part to getting such good results.

It took a couple of tries to get the toner to stick to it, but in the end I got it working by taping a piece of it to some plan paper with kapton tape.
<figure class="half">
	<a href="/images/posts/Homemade-PCBs/MiddelPrint.jpg"><img src="/images/posts/Homemade-PCBs/MiddelPrint.jpg" alt=""></a>
	<a href="/images/posts/Homemade-PCBs/FinalPrint.jpg"><img src="/images/posts/Homemade-PCBs/FinalPrint.jpg" alt=""></a>
	<figcaption>Taping the Yellow Paper to Regular Paper</figcaption>
</figure>

I use a pretty standard way of transferring the toner to the PCB. I just tape down the toner transfer paper to the PCB, put a paper towel over it, and iron it on (two minutes seems to work good). After the two minutes, I spray the towel and PCB with water and iron it out – I repeat that for about one minute.

After that I let the PCB cool, and wash off the toner paper in cool water.

For etching I use strait ferric chloride in a squarish plastic container. It usually takes about 20 minutes to etch if I agitate the container, or less if I rub the ferric chloride on the board:
<figure>
  <a href="/images/posts/Homemade-PCBs/pcb-etch.jpg"><img src="/images/posts/Homemade-PCBs/pcb-etch.jpg" alt="Etching the PCB"></a>
  <figcaption>Etching the PCB</figcaption>
</figure>
I then rinse off the board in cold water again, and remove the toner with lacquer thinner or acetone.
And that's all!

<figure>
  <a href="/images/posts/Homemade-PCBs/pcb.JPG"><img src="/images/posts/Homemade-PCBs/pcb.JPG" alt="Final PCB"></a>
  <figcaption>Finished Test Board</figcaption>
</figure>
(The first trace on the top-left is 2 mil, and the next one is 4 mil)

With this method I have reliably got down to 4 mil traces - I did get a 2 mil trace, but it was starting to have higher resistance (I wouldn't trust it at all)...
