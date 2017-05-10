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
      var newNumber = number * 2;
      newArray.push(newNumber);
    }
    return newArray;
  }

};


module.exports = Enumeration;