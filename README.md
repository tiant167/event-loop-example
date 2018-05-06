# Event Loop Examples
Examples and snippets in article [Node.js event loop workflow & lifecycle in low level](http://voidcanvas.com/nodejs-event-loop/).

The examples help me to figure out the results of these "strange" cases.

You should read the article above to learn the detail of event loop.

## 0. overall
Examples to figure out the different phrase in event loop and there order of execution.
`nextTickQueue`, `microTaskQueue`, `timer`, `pending i/o callbacks`, `idle, prepare`, `poll`, `check`, `close callbacks`.

## 1. basic understanding
Examples explain when `setTimeout` and `setImmediate` will be executed.

## 2. understanding timers better
Exapmles explain why `setTimeout` takes much more time to execute than `setImmediate`.

## 3. understanding nextTick() & timer execution
Examples explain when `nextTick` will be executed
