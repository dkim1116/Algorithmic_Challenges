/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  var result = {};
  var longest = [0, 0];
  for (var i = 0; i < string.length; i++) {
    if (!result[string[i]]) {
      result[string[i]] = [i];
    }
    if (result[string[i]]) {
      if (result[string[i-1]] === result[string[i]]) {
        result[string[i]][1] = i;
      } else {
        result[string[i]] = [i];
      }
    }
  }
  for (var key in result) {
    if (result[key][1]-result[key][0] > longest[1] - longest[0]) {
      longest = result[key];
    }
  }
  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
 console.log(longestRun(randomString(200))) // [1, 3]
 console.log(longestRun(randomString(300)))  // [0, 1]
 console.log(longestRun(randomString(500)))   // [0, 0]