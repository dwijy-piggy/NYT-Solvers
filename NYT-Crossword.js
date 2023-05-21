javascript: var split = location.href.split("/");
fetch("https://www.nytimes.com/svc/crosswords/v6/puzzle/daily/" + split.slice(split.length - 3).join("-") + ".json")
    .then(response => response.text())
    .then(x => {
        hintplacement = JSON.parse(x.slice(x.indexOf("\"clues\":[{") + 8, x.indexOf("}]}]") + 4)).map(y => y["cells"]);
        hints = document.getElementsByClassName("xwd__clue--text xwd__clue-format");
        letters = JSON.parse(x.slice(x.indexOf("s\":") + 3, x.indexOf("}]") + 2)).map(y => y["answer"]);
    })
    .then(() => {
        for (let x in hintplacement) hints[x].innerHTML = hintplacement[x].map(y => letters[y]).join("");
    });
