/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // declare a variable that will contain the stringified "this"
  var stringified = this.toString().split('');
  console.log(stringified)
  // var stringified = stringified.split('');
  // console.log(stringified)
  // declare a variable that will contain an array of the number of 0's needed
  var zerocontainer = [];
  //declare a variable that will contain the result of divided numbers
  var dividers = [];
  // declare a variable that will contain the result with words
  var result = [];
  // iterate through the stringified "this"
  for (var i = stringified.length; i > 0; i--) {
  // stringified.length - (i+1) will be the amount of 0's that the element needs
  // With the amount of 0's that each element needs, push into the stringified with it
    zerocontainer.push(i-1);
  }
  //Iterate through the zero stringified
  for (var i = 0; i < (zerocontainer.length); i++) {
    //Each element represent the amount of zeros that need to be added to the corresponding element in the stringified
    for(var j=(zerocontainer[i]-1); j>=0; j--){

      stringified[i]+="0";
      // console.log(j,'working')
    }
    // console.log('working')
  }
      console.log('line 84 ',stringified)
  //If an element inside the stringified is bigger than 100, divide that by the first value 
  for (var i = 0; i < stringified.length; i++) {
    if(stringified[i]>100){
      dividers.push((stringified[i][0]/1))
    }
  }
  // console.log(dividers)
  //Divide the stringified array with the dividers as you iterate through
  for (var i = 0; i < dividers.length; i++) {
    (stringified[i]=stringified[i]/dividers[i])
  };
  console.log(stringified)
  ///////Keep what the element was divided by and put it infront of the container array
  ///////Iterate through the container and convert into words then push into the result array
  // Iterate through the stringified array and convert into words as you convert the dividers as well
  for (var i = 0; i < stringified.length; i++) {
    if(dividers[i]!==undefined){
      result.push(dividers[i])
    }

    result.push(stringified[i])
  };
  for (var i = 0; i < result.length; i++) {
    if(numbersToWords[result[i]]!==undefined){
      result[i]=numbersToWords[result[i]];
    }
    if(numbersToPlace[result[i]]!==undefined){
      result[i]=numbersToPlace[result[i]]
    }
  };
  // for (var i = 0; i < (result.length-1); i++) {
  //   if(result[i]==='00'){
  //     result.splice(i,1)
  //   }
  //   console.log('inner',result)
  //   for (var j = 1; j < result[i].length; j++) {
  //   if(parseInt(result[i][j])===0){
  //     result[i].splice(j,1)
  //     console.log('nested',result)
  //   }
  //   };
  // };
  console.log(result)
  // return my value as english words *Stringified
  return result.join(' ')
};
// console.log(numbersToPlace["10"])
console.log((33300).toEnglish())

