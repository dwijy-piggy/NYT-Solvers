javascript:function eq(a, b){
    return a.length == b.length && a.every((e, i) => e === b[i]);
}
var arr = Array.from(document.querySelectorAll("[id^='item-']")).map(x => x.innerText);
fetch("https://www.nytimes.com/games/prototype/connections/dist/index.15c9846b.js").then(r => r.text()).then(r => {
    let o = eval(r.slice(r.indexOf("var F")+6, r.indexOf("]}]")+3)).map(y => [y, y["startingGroups"][0].concat(...y["startingGroups"].slice(1))]).find(y => eq(y[1], arr))[0]["groups"];
    p = document.createElement('pre');
    for(let x of Object.keys(o)) p.textContent += (`${x}: ${o[x]["members"].join(', ')}\n`);
    console.log(p);
    document.body.appendChild(p);
});
