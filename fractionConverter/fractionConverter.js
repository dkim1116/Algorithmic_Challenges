/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  var stringed = number.toString();
  var numerator = '';
  var denominator = 10;
  if (stringed.length === 1) {
    stringed += '.0'
  }
  for (var i = 0; i < stringed.length; i++) {
    if (stringed[i] !== '.') {
      numerator += stringed[i];
    }    
  }
  numerator = parseInt(numerator);
  var result;
  var recFun = function (nom, den) {
    if (nom < 3 || den < 3) {
      nom = nom.toString();
      den = den.toString();
      result = nom + '/' + den;
      return
    }
    if (nom % 2 === 0 && den % 2 === 0) {
      recFun(nom/2, den/2);
    } else if (nom % 3 === 0 && den % 3 === 0) {
      recFun(nom/3, den/3)
    } else if (nom % 5 === 0 && den % 5 === 0) {
      recFun(nom/5, den/5)
    } else {
      nom = nom.toString();
      den = den.toString();
      result = nom + '/' + den;
      return
    }
  }
  recFun(numerator, denominator);
  return result
};

console.log(toFraction(3.000))

