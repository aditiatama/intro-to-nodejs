const EvenEmitter = require("events");

class MyEmitter extends EvenEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("error", err => {
  console.log(`Hai ${err.message}`);
})

myEmitter.emit("error", new Error("Whoops!"))