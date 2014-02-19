'use strict';

// exports function that takes a string and returns a function that takes an object that returns a string.
// `obj` is optional
module.exports = function(dotpath, obj){
  if (obj){ // alternate return immediate syntax
    // Fail early if we didn't get correct inputs
    if ( !dotpath
      || !isObject(obj)
      || typeof dotpath != 'string' )
      return undefined;

    var split = dotpath.split('.');
    return recurse(obj, split, split.length - 1, 0);

  } else { // template syntax

    return function(obj){

      // Fail early if we didn't get correct inputs
      if ( !dotpath
        || !isObject(obj)
        || typeof dotpath != 'string' )
        return undefined;

      var split = dotpath.split('.');
      return recurse(obj, split, split.length - 1, 0);
    };

  }
};

// A resursive function the goes down an object tree to find the bottom.
//   Takes and object, an array of ordered property names, and a seed `n` value
function recurse(object, array, fullLength, n) {
  var current = object[array[n]];
  // if the property doesn't exist, get the hellz out
  if (!object.hasOwnProperty(array[n])){ return undefined; }

  if (isObject(current) && n < fullLength) {
    return recurse(current, array, fullLength, n + 1);
  } else {
    return current;
  }
}

function isObject(thing) {
  var ts = Object.prototype.toString;
  return (thing && ts.call(thing) === '[object Object]');
}
