/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context) {
  // TODO: Your code here
  if(arguments.length < 2){
	  if(context === null){
	  	return func;
	  } else {
	  	return func.bind(context);
	  // console.log('bind', test())

	  }
	} else {
		var args = arguments;
		var passedArgs = args.slice(2);
		return func.bind(context, passedArgs);
	}
};

var alice = {
  name: 'alice',
  shout: function(){
    alert(this.name);
    // console.log('test',this.name)
    // console.log(this.name)
  }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(
) {
  // TODO: Your code here
};



//---------------Solution---------------
bind = function(func, context){
	var prevArgs = Array.prototype.slice.call(arguments, 2);
	var 
	//return a function bound to the context
	return function(){
		var args = Array.prototype.slice.call(arguments);
		args = prevArgs.concat(args)
		return func.apply(context, args)
	}
}