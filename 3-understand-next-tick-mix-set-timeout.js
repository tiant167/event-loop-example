var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo", i);
  setTimeout(()=>{
    console.log("setTimeout", i);
  },0);
  process.nextTick(foo);
}

setTimeout(foo, 2);
setTimeout(()=>{
  console.log("Other setTimeout");
}, 2);

/**
* foo 1
* Other setTimeout
* foo (... 19 times)
* setTimeout (... 20 times)
*
* Order of "foo 1" and "Other setTimeout" is not guaranteed 
* "That is because the similar timers are somehow grouped and nextTickeQueue check will be done only after the ongoing group of callback execution"
*/
