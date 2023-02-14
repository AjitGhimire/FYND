//var:global scope
//require:import the module
var x=50;
function init()  //outer function
{
    var a=10; // name is a local variable created by init
    function displayName()   //inner function , a closure
    {
        var b=20;
        var c=a+b+x;
      
      console.log(c); // use variable declared in the parent function
    }
    displayName();
  }
  init();
