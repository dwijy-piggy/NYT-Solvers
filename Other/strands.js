resp = await fetch(`https://www.nytimes.com/games-assets/strands/${new Date().toISOString().split('T')[0]}.json`);
json = await resp.json();
document.getElementById("app").innerHTML += "Solutions: "+json.solutions.slice(0, 7) + "<br>Spangram: " + json.spangram;
