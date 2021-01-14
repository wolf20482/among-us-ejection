# among-us-ejection

![npm](https://img.shields.io/npm/v/among-us-ejection)
![Maintenance](https://img.shields.io/maintenance/yes/2021)

A simple npm package that demonstrates the Among Us ejection scene!

## Install
```
$ npm install among-us-ejection
```

## Ejection on Different Maps
### The Skeld



    　　　.　　　 　　.　　　　　。　　 。　. 　
       
    .　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
    
    　　ﾟ　  Crewmate was not An Impostor.　 。　.
      
    　　'　　　 1 Impostor remains 　 　　。
      
    　　ﾟ　　　.　　　. ,　　　　.　 .

### MIRA HQ


        ☁️☁️☁️☁️☁️ ☁️☁️☁️☁️☁️  ☁️☁️☁️     ☁️☁️☁️☁️
        
     ☁️☁️☁️☁️☁️☁️   ඞ ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️
     
            Crewmate was not An Impostor.
            
               1 Impostor remains.

### Polus
                            ඞ
                            
            Crewmate was not An Impostor.
            
               1 Impostor remains.
               
      🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

### The Airship
                            ඞ
                            
            ☁️☁️ Crewmate was not An Impostor.
            
    ☁️☁️☁️☁️☁️☁️☁️☁️ 1 Impostor remains.
    
        ☁️☁️☁️☁️☁️☁️ ☁️☁️☁️☁️☁️☁️☁️    ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️
        
         ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️   ☁️☁️☁️☁️☁️☁️☁️☁️

## Usage
```js
/**
 * @param {string} [crewmember] - Name of ejected crewmember.
 * @param {boolean} [isImpostor] - Is this person An Impostor?
 * @param {number} [impostorsRemain] - How many Impostors remain.
 * @param {string} [map] - The map that you will be ejecting the person out (Can be either The Skeld, MIRA HQ, Polus or The Airship)
 */
var eject = require('among-us-ejection');
eject(crewmember, isImpostor, impostorsRemain, map);
```

## Quick Example
```js
const eject = require('among-us-ejection');
eject('Crewmate',true,0,'The Skeld');

/* Expected Output:
. 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
    　　ﾟ　  Crewmate was The Impostor.　 。　.
    　　'　　　 0 Impostors remain. 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .
*/
```
