
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
  */

  var Tree = function(name){
    this.children = [];
    this.name = name;
  };

/**
  * add an immediate child
  */
  Tree.prototype.addChild = function(child){
    if(!this.isParentOf(child)){
      this.children.push(child);
    }else {
      throw new Error("That child is already a child of this tree");
    }
    return this;
  };

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
*/
Tree.prototype.getClosestCommonAncestor = function(firstInput, secondInput){
  // TODO: implement me!
  var commonAncester;
  var firstAncestorPath = this.getAncestorPath(firstInput);
  var secondAncestorPath = this.getAncestorPath(secondInput);
        console.log('firstAncestorPath',firstAncestorPath);
        console.log('secondAncestorPath',secondAncestorPath)
  for (var i = 0; i < firstAncestorPath.length; i++) {
    for (var j = 0; j < secondAncestorPath.length; j++) {
      if(secondAncestorPath[j]===firstAncestorPath[i]){
        commonAncester=secondAncestorPath[j];
      }
    };
  };
  // console.log(commonAncester);
  //WOOHOOOO~~~! MVP!!!
  return commonAncester;
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
*/
Tree.prototype.getAncestorPath = function(descendant){
  // TODO: implement me!
  if(!this.isParentOf(descendant)){
    return null;
  }
  //Create a result array
  var result = [];
  // Push "this" in the result, which is going to be what its going to be invoked with
  result.push(this.name)
  // Create a subroutine
  var recursiveFunction = function(input){
  // In the subroutine, if the passed in argument has children, iterate through
    if(input.children){
      for (var i = 0; i < input.children.length; i++) {
        //If the root's child is a parent of the descendant push the descendant's name into the result array
        if(input.children[i].isParentOf(descendant)){
          // console.log(input.children)
        result.push(input.children[i].name);
        recursiveFunction(input.children[i]);
        } 
        //If the root's child is not a parent of the descendant, recurse through the root children's children, dont do anything
  // call isParentOf on the argument.children[i] with the 
      };
    }
  }
  //Push the descendant in the result after it grabs all of its ancestors
  //invoke the recFun
  recursiveFunction(this);
    result.push(descendant.name);
  //return the result
  // console.log(result)
  return result;
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
  Tree.prototype.isParentOf = function(child){
    if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isParentOf(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
  Tree.prototype.removeChild = function(child){
    var index = this.children.indexOf(child);
    if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var grandMa = new Tree("grandMa");
var mom = new Tree("mom");
var me = new Tree("me");
var bro = new Tree("bro");
grandMa.addChild(mom);
mom.addChild(me);
mom.addChild(bro);
grandMa.getClosestCommonAncestor(me, bro)
// grandMa.getAncestorPath(me);