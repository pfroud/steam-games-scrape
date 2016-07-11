"use strict";

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

var detailsBlocks = $$("div.details_block");

var bs = detailsBlocks[3].querySelectorAll("b");

var devName = bs[2].nextSibling.nextSibling.innerHTML;
var pubName = bs[3].nextSibling.nextSibling.innerHTML;



var gameInfo = {
    name: $$("div.apphub_AppName")[0].innerHTML,
    steamLink: window.location.href.split("?")[0],
    gameWebsite: detailsBlocks[4].getElementsByTagName("a")[0].href,
    devName: devName,
    pubName: (pubName == devName) ? "" : pubName
};


var id = window.location.href.split("/")[4];
localStorage.setObject(id, gameInfo);