module.exports = function eject(crewmember, isImpostor, impostorsRemain, map) {
    let impostor;
    let grammarCompliance;
    let result;
    if (typeof crewmember != 'string') throw new TypeError('Crewmember name must be a string!');
    if (typeof impostorsRemain != 'number') throw new TypeError('Amount of Impostors remain must be a number!');
    if (typeof isImpostor != 'boolean') throw new TypeError('Impostor/Not Impostor must be a boolean!');
    if (isImpostor === true) {
        impostor = 'An Impostor'
    } else {
        impostor = 'not An Impostor'
    }
    if (impostorsRemain > 1 || impostorsRemain === 0) {
        grammarCompliance = 'Impostors remain'
    } else {
        grammarCompliance = 'Impostor remains'
    }
    if (map === 'The Skeld') {
        result = `
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
    　　ﾟ　  ${crewmember} was ${impostor}.　 。　.
    　　'　　　 ${impostorsRemain} ${grammarCompliance}. 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .`
    } else if (map === 'MIRA HQ') {
        result = `
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
    }
    return result;
}
