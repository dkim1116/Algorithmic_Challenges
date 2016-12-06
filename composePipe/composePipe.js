/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function (firstFunc, secondFunc) {
  return function (x) {
    return firstFunc(secondFunc(x));};
};

var pipe = function (firstFunc, secondFunc) {
  return function (x) {
    return secondFunc(firstFunc(x));
  };
};

var dynamicCompose = function () {
  var args = arguments;
  return function (x) {
    var result;
    for (var i = args.length - 1; i >= 0; i--) {
      result = args[i](x);
    }

    return result;
  };
};

var dynamicPipe = function () {
  var args = arguments;
  return function (x) {
    var result = x;
    for (var i = 0; i < args.length; i++) {
      console.log(result);
      result = args[i](result);
    }

    return result;
  };
};

var greet = function (name) { return 'hi: ' + name;};

//
var exclaim = function (statement) { return statement.toUpperCase() + '!';};

//
var test = function (x) { return x.toLowerCase();};

var welcome = dynamicCompose(greet, exclaim, test);

// console.log(welcome);

//
console.log(welcome('phillip')); // 'hi: PHILLIP!'

var add2 = function (number) { return number + 2; };

var multiplyBy3 = function (number) { return number * 3; };

var minus3 = function (x) { return x - 3;};

console.log(dynamicPipe(add2, multiplyBy3, minus3)(5)); // 21
// pipe(add2, multiplyBy3, multiplyBy3)(5); // 63
