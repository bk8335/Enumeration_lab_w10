var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    for ( var item of array){
      if (callback(item)){
        return item;
    }
  }

  // map: function(array, callback){

  },

  
}


module.exports = Enumeration;