javascript:function eq(a, b){
    return a.length == b.length && a.every((e, i) => e === b[i]);
}
var arr = document.getElementsByClassName("item");
fetch("https://www.nytimes.com/games/prototype/connections/dist/index.15c9846b.js").then(r => r.text()).then(r => {
    let m = Array.from(arr).map(x => x.innerText);
    let o = eval(r.slice(r.indexOf("var F")+6, r.indexOf("]}]")+3)).map(y => [y, y["startingGroups"][0].concat(...y["startingGroups"].slice(1))]).find(y => eq(y[1], m))[0]["groups"];
    Object.keys(o).forEach((x, i) => {
        setTimeout(() => {
            for(let y of o[x]["members"]) Array.from(arr).find(z => z.innerText === y).dispatchEvent(new Event('pointerdown'));
            document.getElementById("submit-button").dispatchEvent(new Event('pointerdown'));
        }, 2000*i)
    });
});
