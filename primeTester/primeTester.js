/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

<<<<<<< HEAD
 var primeTester = function(n) {
	//Declare a flag variable
	var flag = true;
	//Make an array with numbers from 2 to (n - 1)
	var numArray = [];
	for (var i = 2; i < n; i++) {
		numArray.push(i);
	}
	// console.log(numArray)
	if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
	}
  // TODO: return true if n is prime, false otherwise
  //If the number can be divided by any of the in the array, flip the flag to false
  for (var i = 0; i < numArray.length; i++) {
  		// console.log(numArray[i])
  		if( (n % numArray[i]) === 0 ){
  			// console.log('entering')
  			flag = false;
  		}
  	}
  // return the flag
  return flag;
};
// console.log('test',17%3)
=======
var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
};

>>>>>>> f690606ed9ed483284db08f1360c1754b8419dd2
/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
<<<<<<< HEAD
*/

var primeSieve = function (start, end) {
	// Declare an array that will contain all the numbers from start to end
	var numArray = [];
	// iterate from start input to end input, then push those numbers into the numArray
	for (var i = start; i <= end; i++) {
		numArray.push(i);
	}
	// console.log(numArray)
	// Declare an array where we will be putting in the found prime numbers
	var foundPrimeNums = [];
	// iterate through the array and if the number is only divisible by 
	var primeTester = function(n) {
		var flag = true;
		var subNumArray = [];
		for (var i = 2; i < n; i++) {
			subNumArray.push(i);
		}
		if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
	    	return false;
		}
	  	for (var i = 0; i < subNumArray.length; i++) {
	  		if( (n % subNumArray[i]) === 0 ){
	  			flag = false;
	  		}
	  	}
	  return flag;
	};
	//iterate through each number in the numArray
	for (var i = 0; i < numArray.length; i++) {
			//Input each number from numArray with the previously made function
		if(primeTester(numArray[i])===true){
			//If the function returns true with the passed in number, push that number into a found array
			foundPrimeNums.push(numArray[i]);
		}

	}
	// return the prime numbers 
	return foundPrimeNums;
};


// console.log(primeSieve(3,33))
=======
 */

var primeSieve = function (start, end) {
};


>>>>>>> f690606ed9ed483284db08f1360c1754b8419dd2
