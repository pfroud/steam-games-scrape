# Steam game info scraper

A little utility to scrape info about Steam games. (It's not fully automated.)

I'm not a gamer. I made this to investigate starting a VR arcade, which never took off.

You get:

* Name
* Steam link
* Website
* Developer
* Publisher, if different from developer

How to use:

1. Open a page on the Steam store with a list of games, like  [this one](http://store.steampowered.com/search/?sort_by=Reviews_DESC&vrsupport=101%2C201). I think any `store.steampowered.com/search/*` has the right format.
1. Open your browser's javascript console. (F12 or ctrl-shift-C)
1. Paste the entire [`getLinks.js`](getLinks.js) file into the console and run it.
1. When it's finished, leave the page open. Open all of links it lists.
1. In each new page, paste the entire [`readPage.js`](readPage.js) file into the console and run it.
1. After each time, you can check the results page to view the updated result.
1. Copy/paste into a spreadsheet program.

You can see what the output looks like in [`sampleOutput.csv`](sampleOutput.csv), which shows highest-reviewed HTC Vive games with tracked motion controllers as of December 2016.


This scraper features luxurious CSS styling like checkmarks and strikethrough. *Wow!*

<p align="center" style="text-align: center">
<img src="listOfGames.png?raw=true" alt="List of games">
</p>
