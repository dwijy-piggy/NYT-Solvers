javascript: var split = location.href.split("/");
fetch("https://www.nytimes.com/svc/crosswords/v6/puzzle/daily/" + split.slice(split.length - 3).join("-") + ".json")
    .then(r => r.text())
    .then(x => {
        let hintplacement = JSON.parse(x.slice(x.indexOf("\"clues\":[{") + 8, x.indexOf("}]}]") + 4)).map(y => y["cells"]);
        let hints = document.getElementsByClassName("xwd__clue--text xwd__clue-format");
        let letters = JSON.parse(x.slice(x.indexOf("s\":") + 3, x.indexOf("}]") + 2)).map(y => y["answer"]);
        for (let x in hintplacement) hints[x].innerHTML = hintplacement[x].map(y => letters[y]).join("");
    });
