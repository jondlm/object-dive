'use strict';

// exports function that takes a string and returns a function that takes an object that returns a string.

module.exports = function(dotpath){
  return function(obj){

    // Fail early if we didn't get correct inputs
    if ( !obj
      || !dotpath
      || typeof obj != 'object'
      || typeof dotpath != 'string' )
      return undefined;

    var split = dotpath.split('.');
    return recurse(obj, split, split.length - 1, 0);
  };
};

// A resursive function the goes down an object tree to find the bottom.
//   Takes and object, an array of ordered property names, and a seed `n` value
function recurse(object, array, fullLength, n) {
  var current = object[array[n]];
  debugger;
  // if the property doesn't exist, get the hellz out
  if (!object.hasOwnProperty(array[n])){ return undefined; }

  if (Object.prototype.toString.call(current) === '[object Object]' && n < fullLength) {
    return recurse(current, array, fullLength, n + 1);
  } else {
    return current;
  }
}
