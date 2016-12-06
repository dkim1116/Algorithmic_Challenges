/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  var allAnagrams = function(string) {
  // Your code here.
  // Declare a variable with an empty array that will contain the results
  var result = [];
  // console.log(string.slice(0,1))
  // Declare recFun
  var recFun = function (made){
    // Base Case return and push into the empty array
    if(made.length === string.length){
      result.push(made);
      return;
    }
    for (var i = 0; i < string.length; i++) {
      made+=string[i];
      recFun(made);
      made = made.slice(0, -1);
    };
  };
  // Invoke recFun
  recFun('');
  // var cutDups = function(array){
  //   for (var i = 0; i < string.length; i++) {
  //     var charCounter = 0;
  //     for(var j = 0; j < array.length; j++){
  //       for(var k = 0; k< array[j].length; k++){
  //         if(array[j][k]===string[i]){
  //           charCounter++;
  //         }
  //       }
  //       if(charCounter > 1){
  //         array.splice(j,1)
  //       }
  //     }
  //   };
  // }
  // cutDups(result)
  // return the array
  return result;
};
var anagrams = allAnagrams('abc');
console.log(anagrams)



//-----------Solution----------
var allAnagrams = function(string){
	var anagrams = {};
	var generator = function(text, options){
		if(text.length === string.length){
			anagrams[text] = true;
		}
		for (var i = 0; i < options.length; i++) {
			generator( text + options[i],
			options.slice(0, i) + options.slice(i + 1));
		};
	};
	generator('', string);
	return Object.keys(anagrams);
};