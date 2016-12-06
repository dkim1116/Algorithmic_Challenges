/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(input){
	//Declare an array with the different kind of coins
	var piece = [1,2,5,10,20,50,100,200];
	//Declare a variable that will keep track of the count
	var count = 0;
	//Declare an empty array that will contain the possible coins
	var possibleCoins = [];
	//Iterate through the piece array and divide each one with the input then push into the empty array
	for (var i = 0; i < piece.length; i++) {
		if(input % piece[i] === 0){
			possibleCoins.push(piece[i]);
		}
	};
	// console.log(possibleCoins)
	//Declare recFun with two parameters, currentCoin and total
	var recFun = function(currentCoin, total){
		//base case is when the total is the same as input
		if(total === input){
			count++;
		console.log('currentCoin', currentCoin)
		console.log('total', total)
	console.log('count',count)
			return;
		}
		if(total > input){
			return;
		}
		//add the currentCoin's value to total
		total += currentCoin;
		//iterate through the piece array and recurs
		for (var i = 0; i < possibleCoins.length; i++) {
			recFun(possibleCoins[i], total);
		};
	}
	//Invoke recFun
	recFun(0, 0);
	//return the count
	return count;
};
makeChange(4)


//-------------Solution------------

var makeChange =  function(total, coins){
	var counter = 0;
	coins.sort(function(a, b){return a - b;});
	(function recurse (index, remainder){
		var coin = coins[index];
		if(index === 0){
			remainder % coin === 0 && counter++;
			return
		}
		while (remainder >= 0){
			recurse(index-1, remainder);
			remainder -= coin;
		}

	})(coins.length-1, total);
};

//------------Solution #2---------------

var algorithmicSolution = function(total, coins){
	var values = [1];
	for (var i = 1; i <= total; i++) {
		values[i] = 0;
	};
	coins.sort(function(a, b){return a - b;});
	coins.forEach(function(coin){
		for (var currVal = coin; currVal <= total; currVal++) {
			values[currVal] += values[currVal - coin];
		};
	})
	return values[total];
};

algorithmicSolution(5000)