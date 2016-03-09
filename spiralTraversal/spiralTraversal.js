/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
  // TODO: Implement me!
  //Declare a variable that will contain the results
  var result = [];
  var recFun = function(row, column){
  	//Base Case
  	//If the element doesn't exist, return
  	if(!matrix[row][column]){
  		return
  	}
  	//If the element already exist, then recurs through the columns
  	for (var i = 0; i < result.length; i++) {
  		if(result[i]=== matrix[row][column]){
  			return
  		}
  	};
  	//push the current element into the result
  	if(matrix[row][column]){	
	  	result.push(matrix[row][column])
  	}
  	//If current element is the last element and the next row exists, then go to the next row
  	if(column === matrix.length-1 && row+1 !== matrix.length){
  		recFun(row+1,column);
  	}
  	//If next row doesnt exist, decrement the column
  	if(row+1 === matrix.length){
  		recFun(row, column-1);
  	}
  	//If current element is the first element and its the last row, then go above the row
  	if(column === 0 && row === matrix.length-1){
  		recFun(row-1,column);
  	}
  		recFun(row, column+1)
  	//Dive in
  	for (var i = 0; i < matrix.length; i++) {
  		recFun(0, i)
  	};
  }
  recFun(0, 0);
  console.log(result)
  return result
};



//----------Solution-----------

var spiralTraversal = function(matrix){

	var results = [];
	var startRowIndex = 0;
	var endRowIndex = matrix.length-1;
	var startColIndex = 0;
	var endColIndex = matrix[0].length-1;

	while(startRowIndex <= endRowIndex && startColIndex <=endColIndex){
		for(var i = startColIndex; i <= endColIndex; i++){
			results.push(matrix[startRowIndex][i])
		}
		startRowIndex++;

		for(var j = startRowIndex; j <= endRowIndex; j++){
			results.push(matrix[j][endColIndex])
		}
		endColIndex--;

		for(var k = endColIndex; k>= startColIndex; k--){
			results.push(matrix[endRowIndex][k])
		}
		endRowIndex--;

		for(var m = endRowIndex; m>=startRowIndex; m--){
			results.push(matrix[m][startColIndex])
		}
		startColIndex++;
	}
	console.log(results)
	return results;
}
spiralTraversal([
  [1,2,3,4, 5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]);