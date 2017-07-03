// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //string
  if ( typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // boolean
  if (typeof obj === 'boolean') {
    return  ''+obj+'';
  }
  //number
  if ( typeof obj === 'number') {
    return obj.toString();
  } 
  //null
  if ( obj === null ){
    return '' + null + '';
  }
  //array
  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      var arr = [];
      for ( var i = 0; i < obj.length; i++){
        if ( typeof obj[i] === 'number'){
          arr.push(obj[i]);
          continue;
        }
        arr.push(stringifyJSON(obj[i]));
      }//end for
    } else {
      return '[]';    
    }
    return '['+ arr +']';
  }
  //objects
  if (typeof obj === 'object'){
    var str = '{';
    for (var key in obj){
      //add key to string
      if ( typeof key === 'function' || typeof obj[key] === 'function') { continue; }
      if ( typeof key === 'undefined' || typeof obj[key] === 'undefined') { continue; }
      str += stringifyJSON(key);
      str += ":";
      str += stringifyJSON(obj[key]) + ',';
      
      
      //add value to sting
      
      //if the value is a string
      //if (typeof obj[key] === 'string'){
        
      //if the value is not a string
      //} else {
      //  str += stringifyJSON(obj[key]) + ',';
      //}
      
    } 
    //if the obj is NOT empty
    if ( str.length > 2) {
      return str.slice(0, str.length - 1) + '}';
    }
    //if the obj is empty return empty obj
    return str + '}';
  }
  
};


