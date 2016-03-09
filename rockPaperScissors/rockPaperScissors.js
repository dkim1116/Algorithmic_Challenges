/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// //Original Prompt
// var combo= ['rock','paper','scissors'];
// var result=[];
// for (var i = 0; i < combo.length; i++) {
//   for (var j = 0; j < combo.length; j++) {
//     for (var k = 0; k < combo.length; k++) {
//       result.push([combo[i],combo[j],combo[k]])
//     };
//   };
// };
// console.log(result)

// //Extra Credit
// _.each = function(collection, iterator) {
//     if(collection.constructor === Array){
//       for(var i=0; i<collection.length; i++){
//         iterator(collection[i], i, collection);
//       };
//     } else {
//       for(var key in collection){
//         iterator(collection[key], key, collection);
//       };
//     }
//   };

// _.reduce = function(collection, iterator, accumulator) {
//     var result= accumulator || 0
//     if(collection.constructor === Array && accumulator === undefined){
//       result =  collection.shift()
//     }; 
//     _.each(collection, function(val, key, list){
//       result = iterator(result, val, key, list)
//     });
//     return result;
//   };

// var flattenArr = function(arr) {
// 	return _.reduce(arr, function(result, item) {
// 		result = result.concat(item);
// 		return result;
// 	}, []);
// };

// var rockPaperScissors = function (numberOfRounds) {
//   // TODO: your solution here
//   // make an array with rock paper scissors and assign to possibleOutput variable

//   var possibleOutputs = ['rock','paper','scissors'];
//   //To make an array with possibleOutputs according to the numberOfRounds
//   //Make a newArr
//   var newArr = [];
//   //for every number of rounds, push the possibleOutputs into the newArr
//   for(var i= 0; i < numberOfRounds; i++){
// 	// var possibleCombinations = Math.round(numberOfRounds/3)
// 	var randomIndex = Math.round(Math.random()*i);
// 	newArr.push(possibleOutputs);
//   }
//   // console.log(newArr)

//   var newlyCreatedArr = flattenArr(newArr);
//   // console.log(newlyCreatedArr)
//   // make an empty array and assign it to a seperate variable
//   var result = [];
//   // run a for loop, with a numberOfRounds - 1 as a limit
//   for (var i = numberOfRounds-1; i >= 0; i--) {
//   // get a random index number from the numberOfRounds
// 	var randomIndex = Math.round(Math.random() * i);
//   // push the possibleOutput[i] into the empty array
// 	result.push(newlyCreatedArr[randomIndex]);
//   }
//   // return the result
//   return result;
// };


//Improving on what I've already made

var rockPaperScissors2= function(numberOfRounds){
	var possibleOutputs = ['rock','paper','scissors'];
	var result = [];
	var recursiveFunction = function(x){
		if(x === 0){
		} else {
			var randomIndex = Math.round(Math.random() * x);
			if(randomIndex > 2){
				randomIndex = Math.round(Math.random() * 2);
			}
			result.push(possibleOutputs[randomIndex]);
			x--;
			recursiveFunction(x);
		}
	};
	recursiveFunction(numberOfRounds);
	return result;
};
 

console.log(rockPaperScissors2(3))
