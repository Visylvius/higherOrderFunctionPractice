var numbers = [1,2,3,4,5,6,7,8,9,10];

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               'o','p','q','r','s','t','u','v','w','x','y','z'];



// Practice Problems:
function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (var key in collection) {
      callback(collection[key]);
    }
  }
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}

function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
}

function reject(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (!callback(element)) {
      result.push(element);
    }
  });
  return result;
}
function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false);
}

function indexOf(array, target){
  var result = -1;
  each(array, function(element, index) {
    if (element === target && result === -1) {
      result = index;
    }
  });
  return result;
}

function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return result;
}

function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return result;
}
function uniq(array) {
  var result = [];
  each(array, function(element, index) {
    if (indexOf(result, element) === -1 && element !== '') {
      result.push(element);
    }
  });
  return result;
}

function extend(obj) {
  each(arguments, function(source) {
    each(source, function(value, key) {
      obj[key] = value;
    });
  });
  return obj;
}

function defaults(obj) {
  each(arguments, function(source) {
    each(source, function(value, key) {
      obj[key] === undefined && obj[key] = value;
    });
  });
  return obj;
}

function first(array, n) {
  return n === undefined ? array[0] : array.slice(0,n);
}

function last(array, n) {
  return n === undefined ? array[array.length -1] : array.slice(Math.max(0, array.length -n));
}
//-------------------
// Use the higherOrderFunctions to solve the following problems:

// Use filter to return just the vowels from the array letters



// Use each to print the odd numbers to the console



// Use reduce to return the sum of numbers


// Use map to convert the array letters to all capital letters



// Use filter to return every other letter in letters



// Modify the above function to return the other letters


// Use filter to return the string "lmnop" from letters

 // HINT: more code here

// Return the sum of the even numbers using filter and reduce together

// NO HINTS: All of your code here
