# among-us-ejection
A simple npm package that demonstrates the Among Us ejection scene!

## Install
```
$ npm install among-us-ejection
```

## Usage
```js
const eject = require('among-us-ejection');

eject('insert crewmate name here',amountOfImpostorsRemain);
```

## Example
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
