/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  $(document).ready(function(){
  	$('th').on('click', function(){
			var array = $('tbody').children();
  		if($(this).text()==="Item Name"){
  			console.log('clicked')
  			// console.log(array)
  			$('tbody').prepend(array[1]);
  			$('tbody').append(array[2]);
  			// array.sort(function(a, b){return a - b;});
  			// $('tbody').children().append(array)
  		}
  		if($(this).text()==="Number of Pounds"){
  			$('tbody').prepend(array[4]);
  			$('tbody').prepend(array[1]);
  			$('tbody').append(array[2]);
  		}
  		if($(this).text()==="Price Per Pound"){
  			$('tbody').prepend(array[2]);
  			$('tbody').prepend(array[4]);
  			$('tbody').append(array[1]);
  		}
  		if($(this).text()==="Expiration Date"){
  			$('tbody').append(array[2]);
  			$('tbody').append(array[1]);  			
  			$('tbody').append(array[3]);


  		}
  	})

  })
});

//-----------Solution------------
$(function(){
  var $tbody = $('tbody');
  var $rows = $tbody.children();

  // Get value from row el + col index
  var getCellValue = function(rowEl, colIx){
    var td = rowEl.children[colIx];
    return $(td).text();
  };

  // Determine whether value is string or number
  var getType = function (colIx){
    var val = getCellValue($rows[0], colIx);
    return isNaN(val) ? 'string' : 'number';
  };

  //Sort column when table header is clicked
  $('th').on('click', function(e){
    var colIx = $(this).index();
    var type = getType(colIx);

    //Detach rows and sort them by cell value
    $rows.detach().sort(function (row1, row2){
      var value1 = getCellValue(row1, colIx);
      var value2 = getCellValue(row2, colIx);
      if(type === 'string') return value1 > value2;
      if(type === 'number') return value1 - value2;
    });

    // append sorted rows back onto tbody
    $tbody.append($rows);
  })
});