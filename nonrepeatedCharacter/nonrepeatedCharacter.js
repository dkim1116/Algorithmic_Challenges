/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  var check = {};
  for (var i = 0; i < string.length; i++) {
    if (check[string[i]]) {
      check[string[i]] += 1;
    } else {
      check[string[i]] = 1;
    }
  }

  for (var i = 0; i < string.length; i++) {
    if (check[string[i]] === 1) {
      return string[i];
    }
  }
};

console.log(firstNonRepeatedCharacter('AACBDB'));
