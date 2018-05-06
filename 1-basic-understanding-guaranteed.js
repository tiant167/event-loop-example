const fs = require('fs');

fs.readFile('my-file-path.txt', () => {
  console.log('readFile callback');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  });
});

/**
* Result is:
*   readFile callback
*   setImmediate
*   setTimeout
*/
