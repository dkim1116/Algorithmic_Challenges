/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here
  obj.events = {};
  obj.on =  function(eventName, callback) {
    obj.events[eventName] = callback;
  };
  obj.trigger = function(eventName){
		for (var i = 0; i < arguments.length; i++) {
			obj.events[arguments[i]]();
		}
  };
  return obj;
};







var obj = mixEvents({ name: 'Alice', age: 30 })
 obj.on('ageChange', function(){ // On takes an event name and a callback function
    console.log('Age changed');
 });
 obj.on('nameChange', function(){
 	console.log('name changed')
 })
 obj.age++;
 obj.name = 'Daniel'
 obj.trigger('ageChange');
 obj.trigger('ageChange');

 console.log(obj.events)
 obj.trigger('nameChange','ageChange')
// console.log(obj)
