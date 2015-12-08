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
