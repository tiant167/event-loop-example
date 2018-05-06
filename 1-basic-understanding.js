setTimeout(() => {
  console.log('setTimeout');
}, 0);
setImmediate(() => {
  console.log('setImmediate');
});

/**
* The result of this script is not guaranteed.
*/
