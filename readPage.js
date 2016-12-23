"use strict";

/**
 * Collects info about a game and writes it to localStorage.
 */
function main() {
    // These blocks have most of the info we need
    var detailsBlocks = $$("div.details_block");

    // To find develop and publisher, can't just choose the nth element of something.
    // Need to look for <b>Developer:</b> and <b>Publisher:</b> & choose siblings, b/c some games have multiple of each.
    var bs = detailsBlocks[3].querySelectorAll("b");
    var devName = bs[2].nextSibling.nextSibling.innerHTML;
    var pubName = bs[3].nextSibling.nextSibling.innerHTML;

    var gameInfo = {
        name: $$("div.apphub_AppName")[0].innerHTML,
        steamLink: window.location.href,
        website: detailsBlocks[4].getElementsByTagName("a")[0].href,
        developer: devName,
        publisher: (pubName == devName) ? "" : pubName // no publisher
    };

    var gameId = window.location.href.split("/")[4];
    localStorage.setItem(gameId, JSON.stringify(gameInfo));
}

main();