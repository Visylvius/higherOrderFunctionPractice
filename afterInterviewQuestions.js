//Hack Reactor
function each (collection, callback) {
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

// return the lists when the last element is higher than the first

  var list1 = [1,3,5,9];
  var list2 = [3,5,7,1];
  var list3 = [4,9,8,5];

  filter(lists, function(list) {
    return list[list.length - 1] > list[0];
  });

  function reject(collection, callback) {
    var result = [];
    each(collection, function(element) {
      if (!callback(element)) {
        result.push(element);
      }
    });
    return result;
  }

  // Makersquare

  function historian(arr) {
    var myObject = {};
    return reduce(arr, function(sum, number) {
      if (!myObject[number]) {
        myObject[number] = 0;
      }
      if (myObject[number]) {
        myObject[number]++;
      }
    }, myObject);
  }

  var theArray = [1,2,1,1,5,4,3,3,2,6];
  // returns an object with the key value pairs of how many times the number was in the array
  // {1: 3, 2: 1, 3: 2, 5: 1, 6: 1}
