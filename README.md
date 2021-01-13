# among-us-ejection

![npm](https://img.shields.io/npm/v/among-us-ejection)
![Maintenance](https://img.shields.io/maintenance/yes/2021)

A simple npm package that demonstrates the Among Us ejection scene!

## Install
```
$ npm install among-us-ejection
```

## Usage
```js
const eject = require('among-us-ejection');

eject('Crewmate',1);
// =>
//. 　　　。　　　　•　 　ﾟ　　。 　　.
//
//　　　.　　　 　　.　　　　　。　　 。　. 　
//
//.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
//
//ﾟ Crewmate was not The Impostor.　 。　.
//
//' 1 Impostor remains 　 　　。
//
//　　ﾟ　　　.　　　. ,　　　　.　 .
//
eject('Crewmate','gg');
// => TypeError: Amount of Impostors remain must be a number!
eject(309332345,1);
// => TypeError: Crewmember name must be a string!
```

## Quick Example
```js
const eject = require('among-us-ejection');
const result = eject('Crewmate',1);

console.log(result)
```
