Tree.prototype.treemap = function(callback){
  var newTree = new Tree(callback(this.value));
  newTree.children = this.cdhilren.map(function(child){
    return child.map(callback)
  });
  return newTree;
};
Tree.prototype.mapInPlace = function(callback){
  this.value = callback(this.value);

  this.children.map(function(child){
    child.mapInPlace(callback);
  });
}