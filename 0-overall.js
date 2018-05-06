const fs = require('fs');

fs.readFile('my-file-path.txt', () => {
  console.log('i/o callback')
});
setImmediate(() => console.log('setImmediate'));
setTimeout(() => console.log('setTimeout'));
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise then'));
(() => console.log('sync call'))();

/**
* The Result is:
* sync call
* nextTick
* promise then
* setTimeout
* setImmediate
* i/o callback
*/
