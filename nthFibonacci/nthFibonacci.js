/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3 5 8 13
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // TODO: implement me!
  var container = [];
  var count = 0;
  var recFun = function (number) {
    if (number === 0) {
      container.push(0);
    }

    if (number === 1) {
      container.push(1);
    }

    if (number === n) {
      return;
    }

    recFun(number + 1);
    container.push(container[container.length - 1] + container[container.length - 2]);

  };

  recFun(0);
  console.log(container);

  return container[container.length - 1];
};

console.log(nthFibonacci(5));

var nFib = function (n) {
  return n < 2 ? n : nFib(n - 1) + nFib(n - 2);
};

console.log(nFib(6));
