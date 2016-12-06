/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
<<<<<<< HEAD
  //split the digitString into digits
  var digits = digitString.split('');
  //Declare an array that will contain subarrays of the value from the phoneDigitsToLetters Object
  var possibleLetters = [];
  //Declare an array that will contain the result with all the possible combination
  var result = [];
  //Iterate through the digits and with the following element as a key, look up the value in 
  //phoneDigitsToLetters then push into the possibleLetters
  for (var i = 0; i < digits.length; i++) {
    possibleLetters.push([phoneDigitsToLetters[digits[i]].split('')])
  };
  console.log(possibleLetters)
  //declare recFun
  var recFun = function(numberOfDigits, soFar){
    if(numberOfDigits<=0){
      result.push(soFar);
      return
    }
    for (var i = 0; i < possibleLetters.length; i++) {
      for(var j = 0; j < possibleLetters[i].length; j++){
        var current = possibleLetters[i][j];
        recFun(numberOfDigits - 1, soFar.concat(current))
        soFar.pop()
      }
    };
  }
  recFun(digits.length, []);
  console.log(result)
  // TODO: return every combination that can be spelled on a phone with these digits
  return result;
};



// telephoneWords('2745')

//--------Solution----------
var telephoneWords = function(digitString){
  // Save the current words through closure scope
  var words = [];

  var lettersForDigits = function(word, digits){
    //Base Case
    if (digits.length === 0){
      words.push(word);
      return;
    }

    var currentDigit = digits[0];
    var remainDigits = digits.slice(1);
    var letters = phoneDigitsToLetters[currentDigit].split('');
    //Dive
    for (var i = 0; i < letters.length; i++) {
      lettersForDigits(word + letters[i], remainDigits);
    };
  };

  lettersForDigits('', digitString.split(''))
  return words;
=======
  // TODO: return every combination that can be spelled on a phone with these digits
>>>>>>> ef4cdc774e0c6ccffd6de0df8d7f314a4b04c359
};
