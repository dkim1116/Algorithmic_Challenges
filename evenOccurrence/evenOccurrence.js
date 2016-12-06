/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function (arr) {
  // Your code here.
  var check = {};
  for (var i = 0; i < arr.length; i++) {
    if (check[arr[i]]) {
      check[arr[i]]++;
    } else {
      check[arr[i]] = 1;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (check[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }

  return null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]));
