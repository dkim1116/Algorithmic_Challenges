/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  //Declare an object to keep track of the parentheses
  var container = {};
  //Declare a count variable and assign 0
  var count = 0;
  //iterate through the input
  for (var i = 0; i < input.length; i++){
    //Keep track of the parentheses
    //If the parenthesis doesnt exist in the object
    if (!container[input[i]]) {
      //create a key, then assign 1
      container[input[i]] = 1;
    } else {
      //If it does exist
        //find the key, then increment
      container[input[i]]++;
    }

  //If it starts with ] || } || )
    if (input[i] === ']') {
      if (!container['[']) {
        return false;
      }
    }
    if (input[i] === '[') {
      if (input[i+1] === ')' || input[i+1] === '}') {
        return false;
      }
    }
    if (input[i] === ')') {
      if (!container['(']) {
        return false;
      }
    }
    if (input[i] === '(') {
      if (input[i+1] === ']' || input[i+1] === '}') {
        return false;
      }
    }
    if (input[i] === '}') {
      if (!container['{']) {
        return false;
      }
    }
    if (input[i] === '{') {
      if (input[i+1] === ')' || input[i+1] === ']') {
        return false;
      }
    }
    //return false;
  }
  //If [ exists as a key, see if there are matching value in ]
  //If any of them doesnt match, return false
  if (container['[']) {
    if (container['['] !== container[']']) {
      return false;
    }
  }
  //do the same for all
  if (container['(']) {
    if (container['('] !== container[')']) {
      return false;
    }
  }
  if (container['{']) {
    if (container['{'] !== container['}']) {
      return false;
    }
  }
  //else return true
  return true;
};

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
