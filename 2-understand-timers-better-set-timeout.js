var i = 0;
var start = new Date();
function foo () {
    i++;
    if (i < 1000) {
        setTimeout(foo, 0);
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start));
    }
}
foo();

/**
* It takes 1354ms.
* "comparing time and finding out the deviation is a CPU
* intensive task and takes a longer time.
* Registering timer scripts also does take time."
*/
