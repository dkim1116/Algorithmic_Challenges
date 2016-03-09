/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
	//declare a variable that will contain the result
	var results = [];
	//declare a variable for the real result
	var trueResult = '';
	//declare recFunCheck
	var recFunCheck = function(input){
	//Base Case is when the input.reverse is the same as the input, push into results array
	if(input.length>2){
		if(input.split('').reverse().join('') === input){
			results.push(input);
			return
		}
	}
	//Recurs
		for (var i = 0; i < input.length; i++) {
			for (var j = 0; j < input.length; j++) {
					recFunCheck(input.slice(i,j));
			};
		};
	}
	//Invoke recFun
	recFunCheck(string+=' ');
	console.log(results)
	//Iterate through the results array and pick out the longest palindrome
	for (var i = 0; i < results.length; i++) {
		if(results[i].length > trueResult.length){
			trueResult = results[i]
		}
	};
	//return the real result
	return trueResult
};
console.log(longestPalindrome('s a racecar athle'))

//----------------Solution-----------------
var isPalindrome = function(str) {
	for (var i = 0; i < str.length/2; i++){
		if (str[i] !== str[str.length-i-1]){
			return false;
		}
	}
	return true;
};

var longestPalindrome = function(str){
	var longest = '';
	for (var i = 0; i < str.length; i++) {
		for (var i = 0; i < str.length; i++) {
			var sub = str.slice(i, j+1);
			var p = isPalindrome(sub);
			if(p && longest < sub.length){
				longest = sub;
			}
		};
	};
	return longest;
}

//------------Better Solution-----------
var longestPalindrome = function(string){
	var length = string.length;
	var result = '';


	return result;
}
