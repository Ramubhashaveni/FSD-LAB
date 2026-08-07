const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('userRegistered', (username) => {
  console.log(`[Event Triggered] Email sent to: ${username}@example.com`);
});

emitter.on('userRegistered', (username) => {
  console.log(`[Event Triggered] Welcome database record created for: ${username}`);
});

console.log("Starting application...\n");
emitter.emit('userRegistered', 'Alice');
