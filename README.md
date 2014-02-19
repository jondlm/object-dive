# object-dive

object-dive is a tiny module that searches an object for a specified property.
If the property is found, its value is returned, otherwise it returns
`undefined`.

## Installation

Run `npm install object-dive` to install.

## Basic usage

This way allows for reusable dot paths:

```javascript
var od = require('object-dive')
var pattern = od('levelOne.levelTwo');
var obj = {
  levelOne : {
    levelTwo: 'You found me. Have some cake, the cake is a lie'
  }
};

console.log(pattern(obj)); // -> 'You found me. Have some cake, the cake is a lie'
```

There is an alternate syntax that can be used. If the second argument passed in
is an object, the function will return the result of the dive immediately.

```javascript
var od = require('object-dive');
var obj = {
  levelOne : {
    levelTwo: 'You found me. Have some cake, the cake is a lie'
  }
};

var result = od('levelOne.leveTwo', obj);
console.log(result); // -> 'You found me. Have some cake, the cake is a lie'
```

## Tests

To run the tests you must `npm install` then `npm test` from root directory.

## License
MIT
