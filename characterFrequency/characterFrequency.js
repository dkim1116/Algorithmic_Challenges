/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


// var characterFrequency = function(string) {
// 	//Declare a variable with an empty array
// 	var splitted = [];
// 	//split the string into an array, then assign it to the empty array
// 	splitted = string.split('');
// 	//Declare an array that will contain the subarrays
// 	var result = [];
// 	//Iterate through the splitted array, then keep track of the character that it is iterating through
// 	for (var i = 0; i < splitted.length; i++) {
// 		var currentChar = splitted[i];
// 	//Declare an variable that will keep the count
// 	var count = 1;
// 		for (var j = i; j < splitted.length; j++) {
// 	//Increase the count as it finds the same character throughout the iteration.
// 			if(currentChar === splitted[j]){
// 				count++
// 				console.log(count)
// 			}
// 	//After it finishes its iteration, put the character and the count into a subarray
// 		};
// 		result.push([currentChar, count])
// 	};
// 	console.log(result)
// 	//
//   return result;
// };
var characterFrequency = function(string){
	//declare an object container
	var container = {};
	//declare a variable with an empty array
	var result = [];
	//Iterate through the string
	for (var i = 0; i < string.length; i++) {
		//If the value of the current key has already been assigned, increase the count
		if(container[string[i]]>=0){
			container[string[i]]++
			//Else assign 1 as the value of the current key
		}else{
		container[string[i]]=1;
		}
		console.log(container[string[i]])
	};
	//Iterate through the object container
	for(var key in container){
		//Push in the key and the value of the key into the result array as a subarray
		result.push([key,container[key]])
	}
	// for (var i = 0; i < result.length; i++) {
		// if(result[i+1]!==undefined){
			// if(result[i][1]===result[i+1][1]){
				// if(result[i][0]<result[i+1][0]){
					// temp=result[i][0];
					// result[i][0]=result[i+1][0];
					// result[i+1][0]=temp;
				// }
			// }
		// }
	// };
	console.log(result)
	//return the result
	return result;
}
// characterFrequency('miaaiaaippi')
var characterFrequency = function(string){
	var letter, result = [], frequencies = {}, i;
	for (var i = 0; i < string.length; i++) {
		letter = string.charAt(i);
		frequencies[letter] =frequencies[letter] || 0;
		frequencies[letter]++;
	}
	for(var key in frequencies){
		result.push([key,frequencies[key]]);
	}
	//Sort pairs appropriately
	result.sort(function(a, b){
		if(a[1] > b[1]){
			return -1;
		} else if (a[1] > b[1]) {
			return 1;
		} else if(a[0]<b[0]){
			return -1;
		} else if(a[0]>b[0]){
			return 1;
		}
	})
}