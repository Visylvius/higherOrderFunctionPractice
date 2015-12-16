_.each = function(collection, iterator) {
      if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          iterator(collection[i], i, collection);
        }
      } else {
        for (var key in collection) {
          iterator(collection[key], key, collection);
        }
      }
  };


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

function indexOf(collection, value, fromIndex) {
  var result = -1;
  var position = fromIndex -1 || 0;
  fromIndex = fromIndex || 0;
  each(collection, function(element) {
    if ((element === target) && (result === -1) && (position >= fromIndex)) {
        result = position;
    }
    position++;
  });
  return result;
}

Object.prototype.getKey = function(value){
  for(var key in this) {
     if(this[key] == value) {
      return key;
     }
  }
 return null;
};


function defaults(collection, object) {
  each(object, function(element) {
    var key = collection.getKey(element);
    if (key !== null) {

      collection[key] = object[element];
    }
  });
  return collection;
}

_.uniq = function(array) {
    var result = [];
    _.each(array, function(element, index) {
      if (_.indexOf(result, element) === -1 && element !== '') {
        result.push(element);
      }
    });
    return result;
  };

  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };
  _.extend = function(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          obj[key] = arguments[i][key];
        }
      }
      return obj;
    };

    // Like extend, but doesn't ever overwrite a key that already
    // exists in obj
    _.defaults = function(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (!obj.hasOwnProperty(key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    };

    _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };
  _.shuffle = function(array) {
      array = array.slice(0);
      for (var i = 0; i < array.length; i++) {
        var random = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[random];
        array[random] = temp;
      }
      return array;
    };
    //working on memorize;
    _.memoize = function(func) {
    var result = {};
    var cache;
    return function(arg) {

      // var newArgument = result[arg];
      // newArgument = result[arguments];
      if (result[arguments] !== cache) {
        cache = result[arguments];

        // console.log('this is callback function' + func);
        // console.log('this' + this);
        // console.log('this result[arg]' + result[arg]);
        // console.log(arg);

        result[arguments] = func.apply(this, arguments);
        console.log(result[arguments]);
      }
      // console.log(result);
      // console.log(arguments);
      // console.log('this is teh best' + result[arguments]);
      return result[arguments];
    };
  };
