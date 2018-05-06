var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo");
  setTimeout(()=>{
    console.log("setTimeout");
  },0);
  process.nextTick(foo);
}   
setTimeout(foo, 2);

/**
* The result is:
* foo
* foo
* ... 20 times foo
* setTimeout
* setTimeout
* ... 20 times setTimeout
*
* Because nextTick is called recursively.
* "When all nextTickQueue callbacks are executed,
* then it will take care of others, i.e. setTimeout callbacks"
*/
