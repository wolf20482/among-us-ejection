module.exports = function eject(crewmember, impostorsRemain) {
    if (typeof crewmember != 'string') throw new TypeError('Crewmember name must be a string!');
    if (typeof impostorsRemain != 'number') throw new TypeError('Amount of Impostors remain must be a number!');
        return (`. 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
    　　ﾟ　  ${crewmember} was not The Impostor.　 。　.
    　　'　　　 ${impostorsRemain} Impostor remains 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
  };
