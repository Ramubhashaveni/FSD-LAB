const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (username) => {
  console.log(`Hello, ${username}! Welcome to Node.js Event Handling.`);
});
myEmitter.on('login', (userId) => {
  console.log(`User with ID: ${userId} has successfully logged in.`);
});

console.log("Triggering events...\n");

myEmitter.emit('greet', 'Alice');
myEmitter.emit('login', 101);
