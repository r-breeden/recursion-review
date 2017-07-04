// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList


var getElementsByClassName = function(className) {
  // your code here
  
  
  var recursion = function (node, className) {
    var arr = [];
    //check if current node has class name
    //if class name present add to array
    if ( node.classList ) {
      for ( var i = 0; i < node.classList.length; i++ ) {
        if ( node.classList[i] === className ) {
          arr.push(node);
        }
      }
    }
    //recusively call each node
    for ( var i = 0; i < node.childNodes.length; i++ ) {    
      arr = arr.concat(recursion(node.childNodes[i], className));
    }
    return arr;
  };//end recursion
  return recursion(document.body, className);
  
};
