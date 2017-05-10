var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    for ( var item of array){
      if (callback(item)){
        return item;
      }
    }
  },

  map: function(array, callback){
    var newArray = [];
    for ( var number of array){
      newArray.push(callback(number));
    }
    return newArray;
  },

  filter: function(array, callback){
    var newArray = [];
    for ( var number of array){
      if (callback(number)){
        newArray.push(number);
      }
    }
    return newArray;
  },

  some: function(array, callback){
    for ( var item of array){
      if (callback(item)){
        return true;
      }
    }
    return false;
  },

  every: function(array, callback){
    var result;
    for (var item of array){
      if (callback(item)){
        result = true;
      }else{
        result = false;
        return result;
      }
    }
    return result;
  },

  reduce: function(array, callback){
    var total = 0;
    for (var item of array){
      total = callback(total, item);
    }
    return total;
  }


};


module.exports = Enumeration;