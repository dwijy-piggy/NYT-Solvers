javascript:var f = () => fetch("https://www.nytimes.com/games/prototype/digits/dist/index.c0e9c2d7.js").then(r => r.text()).then(r => {
    let a = eval(r.slice(r.indexOf(",or=")+4, r.indexOf("]}]")+3));
    let b = [...document.querySelectorAll("[id^='target']")].slice(0,5).map(x => parseInt(x.innerText));
	document.querySelectorAll("[id^='history-container']").forEach(x => x.appendChild(document.createTextNode("Answer: " + a.find(x => x.targets.every((e, i) => e === b[i])).solutions[parseInt(document.getElementsByClassName("puzzle active")[0].id[2])])));
});
f();
new MutationObserver((ml) => {
  for (const m of ml) {
    if (m.type === "attributes" && m.attributeName == "class"){
		document.querySelectorAll("[id^='history-container']").forEach(x => {if(x.lastChild.tagName != "ul")x.removeChild(x.lastChild);});
		f();
		break;
	}
  }}).observe(document.getElementById("puzzles"), {attributes: true, subtree: true});
