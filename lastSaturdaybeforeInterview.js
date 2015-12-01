//roman numerals
//Symbol Value I 1 V 5 X 10 L 50 C 100 D 500 M 1,000
// I can be subtracted from V and X, L can be subtracted from C, and D. C can be subtracted by D and M
function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false);
}
function romanNumeralValue(str) {
  var subtractive = false;
  str = str.toUpperCase().split('');
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'I') {
      str[i] = 1;
    } else if (str[i] === 'V') {
      str[i] = 5;
    } else if (str[i] === 'X') {
      str[i] = 10;
    } else if (str[i] === 'L') {
      str[i] = 50;
    } else if (str[i] === 'C') {
      str[i] = 100;
    } else if (str[i] === 'D') {
      str[i] = 500;
    } else if (str[i] === 'M') {
      str[i] = 1000;
    } else if ( (str[i] === 'I') && (str[i + 1] === 'V')) {
      str[i] = 4;
    }
  }
  str = str.reduce(function(prev, current) {
    return prev + current;
  });
  console.log(str);
}
romanNumeralValue('IV');



var string = 'hello my name is bob';
function wordCount(paragraph,name){
    // for each word in paragraph, see if
    var paragraphLetters = paragraph.toUpperCase().split('');
    var nameLetters = name.toUpperCase().split('');
    var count = {};

    for (var i = 0; i < nameLetters.length; i++){
        count[nameLetters[i]] = 0;
    }

    for (var i = 0; i < paragraphLetters.length; i++){
        if (nameLetters.indexOf(paragraphLetters[i]) !== -1){
            count[paragraphLetters[i]]++;
        }
    }
    return count;
}

wordCount(string,"loren");
