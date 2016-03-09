/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  var divisor = 1;
  var result;
  var recFun = function (input) {
    console.log(input);
    if (input.length === 1 && input[0] !== target) {
      result = false;
      return;
    }

    if (input[Math.ceil(input.length / 2)] === target) {
      result = Math.ceil(input.length / 2);
      return;
    }

    if (input[Math.ceil(input.length / 2)] !== target) {
      if (target > input[Math.ceil(input.length / 2)]) {
        divisor = divisor * 2;
        recFun(input.slice(Math.ceil(input.length / 2)));
        divisor = divisor / 2;
      } else {
        divisor = divisor * 2;
        recFun(input.slice(0, Math.ceil(input.length / 2)));
        divisor = divisor / 2;
      }
    }
  };

  recFun(array);
  return result;
};

var binarySearch2 = function (array, target) {
  var index = 0;
  var recFun = function (input) {
    console.log('INDEX', index);
    console.log('INPUT ', input);
    if (input.length === 1 && input[0] !== target) {
      index = false;
      return;
    }

    if (input[Math.floor(input.length / 2)] === target) {
      return;
    }

    if (target > input[Math.floor(input.length / 2)]) {
      index = index + Math.floor(input.length / 2);
      recFun(input.slice(Math.floor(input.length / 2), input.length));
    }

    if (target < input[Math.floor(input.length / 2)]) {
      index = index + Math.floor(input.length / 2);
      recFun(input.slice(0, Math.floor(input.length / 2)));
    }

  };

  recFun(array);
  return index;
};

var index = binarySearch2([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(index);
