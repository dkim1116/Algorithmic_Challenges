/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function (string1, string2) {
  // TODO: Your code here!
  var result = '';
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        result += string1[i];
      }
    }
  }

  return result;
};

console.log(commonCharacters('acexivou', 'aegihobu'));

//Extra credit
var commonCharacters2 = function (strings) {
  var duplicates = {};
  var args = arguments;
  var result = '';
  for (var key in args) {
    if (typeof args[key] === 'string') {
      for (var i = 0; i < args[key].length; i++) {
        if (duplicates[args[key][i]]) {
          duplicates[args[key][i]]++;
        } else {
          duplicates[args[key][i]] = 1;
        }
      }
    }
  }

  for (var key in duplicates) {
    if (duplicates[key] > 1) {
      result += [key];
    }
  }

  return result;
};

console.log(commonCharacters2('ace', 'cwx', 'gexc'));
