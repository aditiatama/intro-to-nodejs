const EvenEmitter = require("events");

class MyEmitter extends EvenEmitter {}

const myEmitter = new MyEmitter();

let listener1 = function listener1() {
  console.log("listener 1")
}

let listener2 = function listener2() {
  console.log("listener 2")
}

myEmitter.on("connection", listener1);
myEmitter.on("connection", listener2);

let eventListeners = EvenEmitter.listenerCount(myEmitter, "connection");

console.log(eventListeners + " Listener(s) yang berhubungan dengan key connection")

myEmitter.emit("connection")