/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
result.resize = function(){
    if(size > (.75 * storageLimit)){
      storageLimit *= 2;
    }
    if(size < (.25 * storageLimit)){
      storageLimit /= 2;
      //tupals in tempStorage
      // var tempStorage = [];
      //CleanUp
      // if(storage.length){
      //   for (var i = 0; i < storage.length; i++) {
      //     if(storage[i].length){
      //       for (var j = 0; j < storage[i].length; j++) {
      //         tempStorage.push(storage[i][j]);
      //       };
      //     }
      //   };
      //   for (var i = 0; i < tempStorage.length; i++) {
      //     this.remove(tempStorage[i][0]);
      //   };
      //   for (var i = 0; i < tempStorage.length; i++) {
      //     this.insert(tempStorage[i][0],tempStorage[i][1]);
      //   };
      // }
    }
    console.log(storage)
  };
  result.insert = function(key, val){
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(!storage[index]){ 
      storage[index] = [[key, val]];
      size++;
      this.resize();
      // console.log('doesnt exist', storage)
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0]===key){
          storage[index][i][1]=val;
          // console.log('it exists', storage)
        } else {
          storage[index].push([key,val]);
          size++;
          this.resize();
        }
      };
    }
  };

  result.retrieve = function(key){
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]){
      for(var i = 0; i < storage[index].length; i++){
        if(storage[index][i][0]===key){
          return storage[index][i][1];
        };
      }
    }
  };

  result.remove = function(key){
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]){
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0]===key){
          storage[index][i][1]=null;
          size--;
          this.resize();
        }
      };
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};





//--------Solution------------
var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value){
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[hash] || [];
    var replaced = false;
    //check if the key is already stored
    bucket.forEach(function(pair){
      if(pair[0]===key){
        pair[1] = value;
        replaced = true;
      }
    });

    if(!replaced){
      bucket.push([key,value]);
      size++;
      //Resize if necessary
      if(size>storageLimit * 0.75){
        resize(storageLimit * 2)
      }
    }
  }
  result.resize = function(newSize){
    var copy = this.storage;
    storageLimit = newSize;
    storage = [];
    size = 0;

    copy.forEach(function(pairs){
      pairs.forEach(function(pair){
        this.insert(pair[0],pair[1]);
      });
    });
  }

  return result;
}