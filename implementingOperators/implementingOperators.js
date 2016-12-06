// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  // return x * y;
  var result = 0;
  for(var i = 0; i < x; i++){
  	result+=y;
  }
  return result
};

var divide = function(x, y) {
  // TODO: should return the product of x * y
  // return (x / y)
  var hackyResult = '';
  var divideBy = x;
  var divisor = y;
  var result = 0;
  var remainer = 0;
  for(var i = x; i <= (x*x); i+=x){
  	divideBy-=divisor
  	console.log(divideBy)
  	if(divideBy>=0){
  		result+=1
  	} else {
  	  hackyResult+=result+='.'
  	  return hackyResult+=(-divideBy)
  	}
  }

  return hackyResult
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  // return (x % y)
  var divideBy = x;
  var divisor = y;
  var result = 0;
};

  // TODO: should return the remainder of x / y
// console.log(divide(6,4))

//------------Solution-----------
var multiply = function (x, y){
  var result = 0;
  while(y--){
    result += x;
  }
  // ^ means exclusive or. true ^ true === false, false ^ true === true
  if( x < 0 ^ y < 0){
    return -multiply(Math.abs(x), Math.abs(y))
  }
  return result
};

var divide = function(x, y){
  var result = 0;

  while( x >= y){
    x-=y;
    result++
  }
  return result;
};

var modulo = function(x, y){

}