/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var shiftedArray = rotated;
  var recFun = function (input) {
    console.log(input);
    if (input[0] < input[1]) {
      console.log(input);
      for (var i = 0; i < input.length; i++) {
        if (input[i] === target) {
          return i;
        }
      }

      return null;
    }

    var temp = shiftedArray.shift();
    shiftedArray.push(temp);
    recFun(shiftedArray);
  };

  return recFun(shiftedArray);
};

// var recFun = function (rotated, target) {
//   if (rotated[0] < rotated[1]) {
//     // for (var i = 0; i < Math.ceil(rotated.length/2); i++) {
//     //   if (rotated[i] === target) {
//     //     return i;
//     //   }
//     // }
//     if (target > rotated[Math.ceil(rotated.length / 2)]) {
//       if
//         if (rotated[i] === target) {
//           return i;
//         }
//       }
//
//       return null;
//     } else {
//     }
//
//   }
//
//   var temp = rotated.shift();
//   rotated.push(temp);
//   recFun(rotated, target);
// };

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2));
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100));
