/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function (apple, orange) {
  for (var key in apple) {
    if (!orange[key]) {
      console.log('first conditional', key);
      return false;
    }

    for (var key2 in apple[key]) {
      if (apple[key][key2] !== orange[key][key2]) {
        console.log('second conditional');
        return false;
      }

      return true;
    }
  }
};

var deepEquals2 = function (apple, orange) {
  var flag = true;

  var recFun = function (input, secondInput) {
    if (!input || !secondInput) {
      return;
    }

    for (var key in input) {
      if (typeof input[key] === 'object') {
        recFun(input[key], secondInput[key]);
      } else {
        if (input[key] !== secondInput[key]) {
          flag = false;
        }
      }
    }
  };

  recFun(apple, orange);
  return flag;
};

console.log(deepEquals2({ a:1, b: { c:3, d: { e: 4, f: [1, 2, 3] } } }, { a:1, b: { c:3, d: { e: 4, f:[1, 2, 3] } } })); // true

console.log(deepEquals2({ a:1, b: { c:5 } }, { a:1, b: { c:6 } }));// false
