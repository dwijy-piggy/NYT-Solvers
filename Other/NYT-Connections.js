document.getElementsByClassName("pz-game-field")[0].appendChild(document.createTextNode(Object.values(gameData[gameData.length-1].groups).map(x => x.members.toString()).join('  -  ')))
