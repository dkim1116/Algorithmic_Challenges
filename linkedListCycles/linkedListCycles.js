/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value){
  return { value: value, next: null };
}

var hasCycle = function(linkedList){
  // TODO: implement me!
  var flag = false;
  //declare an array with the iterated nodes
  var iteratedNodes = {};
  //Declare recFun
  var recFun = function(input, iterated){
  //Base Case, when the function hits the 'linkedlist's' value or we've already went through the same node , exit out
  	if(input.next === null){
  		return;
  	}
  	if(input.next === linkedList.value || iterated[input.value] === 1){
  		flag = true;
  		return;
  	}
  	iterated[input.value] = 1;
  //recurs with the input's next value
  	recFun(input.next, iteratedNodes)
  };
  //Invoke recFun
  recFun(linkedList, iteratedNodes);
  //return flag
  return flag;
};

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(hasCycle(nodeA))
nodeE.next = nodeB;
console.log(hasCycle(nodeA))


//---------Solution---------
var hasCycle = function(linkedList){

  var fast = linkedList;
  var slow = linkedList;
  var pause = true;

  while(fast = fast.next){
    if(fast === slow){
      return true;
    }
    if(!puase){ 
      slow = slow.next;
    }
    pause = !pause;
  }
  return false;
}