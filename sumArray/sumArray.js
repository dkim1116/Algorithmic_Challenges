/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  //Declare a variable that will contain the sum and a variable that I can use to compare the sum
  var sum = 0; var max = array[0];
  //Iterate through the array
  for (var i = 0; i < array.length; i++) {
    //Add the element to the sum
    sum += array[i];
    //If sum is less than the element, sum equals that element
    if(sum < array[i]){
      sum = array[i];
    }
    //If Maximum is less than the sum, maximum equals the sum
    if(max < sum){
      max = sum;
    }
  }
  // if(sum > max){
  //   max = sum;
  // }
  //Return the highest sum
  return max;
};
console.log(sumArray([-2,1,-3,4,-1,2,1,-5,4]))
