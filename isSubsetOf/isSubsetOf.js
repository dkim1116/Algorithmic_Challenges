/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // Your code here
  // Declare a result array;
  var result = [];
  //declare a flag array
  var flag = [];
  // iterate through "this" array and if every element in "this" array is
  for (var i = 0; i < this.length; i++) {
  // inside the argument array, 
  	for (var j = 0; j < array.length; j++) {
  		//add the result of the compared elements in the result array
  		result.push(this[i]===array[j])
  		// console.log('result',result)
  	}
  }
  //iterate through the result array
  for (var i = 0; i < result.length; i++) {
  	if(result[i]===true){
  		//add something to the flag array everytime an element is equal to true
  		flag.push(1)
  	}
  };
  // console.log('flag',result)
  //If the amount of times that true is pushed in to the flag is the same as "this" array's length
  if(flag.length===this.length){
  //return true
  	return true;
  } else {
  	//If not, then return false;
  	return false;
  }
  //return the flag
  // console.log(flag);
  // return flag;
};
var a=['dogs','cats'];
console.log(a.isSubsetOf(['dogs','penguins']))