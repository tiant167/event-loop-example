const fs = require('fs');

fs.readFile('my-file-path.txt', () => {
  setImmediate(() => console.log('setImmediate'));
  setTimeout(() => console.log('setTimeout'));
  console.log('i/o callback')
});
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise then'));
(() => console.log('sync call'))();

/**
* The Result is:
* sync call
* nextTick
* promise then
* i/o callback
* setImmediate
* setTimeout
*/
