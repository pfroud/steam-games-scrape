"use strict";
localStorage.clear();

function main() {
    var rows = $$("a.search_result_row");
    var games = [];

    rows.forEach(function (row) {
        games.push({
            name: row.querySelector("span.title").innerHTML,
            link: row.href,
            id: row.href.split("/")[4] //this is the game's Steam ID
        });
    });
    // see if i can get away without style type and open body
    document.writeln("<head><style>" +
        "p{line-height:50%; font-family:sans-serif;} span{font-weight:bold; color:green; visibility:hidden;}" +
        "</style></head>");

    games.forEach(function (game) {
        document.writeln(
            "<p id=\"" + game.id + "\"><span>&#10004;</span> <a href=\"" + game.link + "\">" + game.name + "</a></p>");
    });

    document.writeln("<pre>");

    var header = ["Game", "Steam link", "Game website", "Developer", "Publisher"];
    header = header.map(wrapInQuotes); // wrap string in quotes
    document.writeln(header.join());

    window.addEventListener("storage", storageCallback);
}

function wrapInQuotes(str) {
    return '"' + str + '"'
}

function storageCallback(event) {
    var paragraph = $("p#" + event.key);
    paragraph.getElementsByTagName("span")[0].style.visibility = "visible"; //turn on the green checkmark

    var link = paragraph.getElementsByTagName("a")[0];
    link.style.color = "gray";
    link.style.textDecoration = "line-through";

    var gameInfo = JSON.parse(event.newValue);
    var row = [gameInfo.name, gameInfo.steamLink, gameInfo.website, gameInfo.developer, gameInfo.publisher];
    row = row.map(wrapInQuotes);
    document.writeln(row.join());
}

main();