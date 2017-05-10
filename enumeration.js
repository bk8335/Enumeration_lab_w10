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
  }


};


module.exports = Enumeration;