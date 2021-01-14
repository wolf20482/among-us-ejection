module.exports = function eject(crewmember, isImpostor, impostorsRemain, map) {
    if (typeof crewmember != 'string') throw new TypeError('Crewmember name must be a string!');
    if (typeof impostorsRemain != 'number') throw new TypeError('Amount of Impostors remain must be a number!');
    if (typeof isImpostor != 'boolean') throw new TypeError('Impostor/Not Impostor must be a boolean!');
    if (isImpostor === true) {
        impostor = 'The Impostor'
    } else {
        impostor = 'not The Impostor'
    }
    if (impostorsRemain > 1) {
        grammarCompliance = 'Impostors remain'
    } else {
        grammarCompliance = 'Impostor remains'
    }
    if (map === 'The Skeld') {
        result = `. 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
    　　ﾟ　  ${crewmember} was ${impostor}.　 。　.
    　　'　　　 ${impostorsRemain} ${grammarCompliance} 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .`
    } else if (map === 'MIRA HQ') {
        result = `☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️
        ☁️☁️☁️☁️☁️ ☁️☁️☁️☁️☁️  ☁️☁️☁️     ☁️☁️☁️☁️
     ☁️☁️☁️☁️☁️☁️   ඞ ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️
            ${crewmember} was ${impostor}
               ${impostorsRemain} ${grammarCompliance}.`
  } else if (map === 'Polus') {
        result = `
                  ඞ
            ${crewmember} was ${impostor}
               ${impostorsRemain} ${grammarCompliance}.
      🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`
  } else {
        result = `
                  ඞ
         ☁️☁️ ${crewmember} was ${impostor}
   ☁️☁️☁️☁️☁️☁️☁️☁️ ${impostorsRemain} ${grammarCompliance}.
    ☁️☁️☁️☁️☁️☁️ ☁️☁️☁️☁️☁️☁️☁️    ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️
       ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️   ☁️☁️☁️☁️☁️☁️☁️☁️` // The Airship
  return result;
