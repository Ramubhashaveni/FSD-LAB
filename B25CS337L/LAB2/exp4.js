
const EventEmitter = require('events');

const alertEmitter = new EventEmitter();

alertEmitter.on('securityAlert', (user) => {
  console.log(`[Logger] Security warning: Unauthorized login attempt detected for user '${user}'.`);
});
alertEmitter.on('securityAlert', (user) => {
  console.log(`[Email Service] Sending security alert email to admin regarding '${user}'.`);
});
alertEmitter.on('securityAlert', (user) => {
  console.log(`[Audit System] Recording security incident for '${user}' into the database.`);
});
console.log("Monitoring system active...\n");
alertEmitter.emit('securityAlert', 'admin_guest');