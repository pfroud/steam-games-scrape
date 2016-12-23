"use strict";
localStorage.clear();

/**
 * Changes the page to a list of links for the user to open.
 * As the user runs readPage.js on each page, builds a table of game info as comma-separated values.
 */
function main() {
    var rows = $$("a.search_result_row");
    var games = [];

    // Store game info in an array
    rows.forEach(function (row) {
        games.push({
            name: row.querySelector("span.title").innerHTML,
            link: row.href,
            id: row.href.split("/")[4] //this is the game's Steam ID
        });
    });

    // Wipe the page and add some CSS
    document.writeln("<head><style>" +
        "p{line-height:50%; font-family:sans-serif;} span{font-weight:bold; color:green; visibility:hidden;}" +
        "</style></head>");

    // Write links for each game
    games.forEach(function (game) {
        document.writeln(
            "<p id=\"" + game.id + "\"><span>&#10004;</span> <a href=\"" + game.link + "\">" + game.name + "</a></p>");
    });

    // Add CSV header
    document.writeln("<pre>");
    var header = ["Game", "Steam link", "Game website", "Developer", "Publisher"];
    header = header.map(wrapInQuotes); // wrap string in quotes
    document.writeln(header.join());

    window.addEventListener("storage", storageCallback);
}

//noinspection JSValidateJSDoc (WebStorm doens't know about StorageEvent)
/**
 * Called when readPage writes game info in localStorage.
 * Reads the new game info, updates the list of links, and adds the info to the CSV.
 *
 * @param {StorageEvent} event - A StorageEvent containing info about a game.
 */
function storageCallback(event) {
    //noinspection JSUnresolvedVariable (Webstorm doesn't know about StorageEvent.key)
    var paragraph = $("p#" + event.key);
    paragraph.getElementsByTagName("span")[0].style.visibility = "visible"; //turn on the green checkmark

    // Style the link
    var link = paragraph.getElementsByTagName("a")[0];
    link.style.color = "gray";
    link.style.textDecoration = "line-through";

    //noinspection JSUnresolvedVariable (Webstorm doesn't know about StorageEvent.newValue)
    var gameInfo = JSON.parse(event.newValue);
    // Write a CSV row
    var row = [gameInfo.name, gameInfo.steamLink, gameInfo.website, gameInfo.developer, gameInfo.publisher];
    row = row.map(wrapInQuotes);
    document.writeln(row.join());
}

/**
 * Wraps a string in double quotes.
 *
 * @param {string} str - A string to wrap in quotes.
 * @returns {string} - The string, wrapped in quotes.
 */
function wrapInQuotes(str) {
    return '"' + str + '"'
}

main();