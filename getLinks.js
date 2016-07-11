"use strict";

var as = $$("a.search_result_row");
localStorage.clear();

var currentA, linkHref, linkText, id;
for (var i = 0; i < as.length; i++) {


    currentA = as[i];
    linkHref = currentA.href;
    id       = linkHref.split("/")[4];
    linkText = currentA.querySelector("span.title").innerHTML;

    document.writeln("<p id=\"" + id + "\"><a href=\"" + linkHref + "\">" + linkText + "</a></p>");
}


document.writeln("<pre>");

window.addEventListener("storage", storageCallback);


function storageCallback(event) {
    var id       = event.key;
    $$("p#" + id)[0].innerHTML += " - found!";
    var info = JSON.parse(event.newValue); // http://stackoverflow.com/a/2010994

    document.writeln(
        info["name"] + "," + info["steamLink"] + ",,," + info["gameWebsite"] +
        ",,,," + info["devName"] + ",," + info["pubName"] + ",");
}