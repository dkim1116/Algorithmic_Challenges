/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  var result = [];
  var newStr = str;
  var char;
  var recFun = function (input) {
    input = input || '';
    result.push(input);

    if (input === str) {
      return;
    }

    for (var i = 0; i < newStr.length; i++) {
      char = newStr[0];
      newStr = newStr.slice(1);
      recFun(input + char);

    }
  };

  recFun();

  return result;
};

console.log(powerSet('abc'));
