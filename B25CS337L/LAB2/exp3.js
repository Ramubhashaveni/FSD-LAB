const EventEmitter = require('events');
const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (orderId, customerName) => {
  console.log(`[Event: orderPlaced] Order #${orderId} received from ${customerName}.`);
});
orderEmitter.on('paymentReceived', (orderId, amount) => {
  console.log(`[Event: paymentReceived] Payment of $${amount} confirmed for Order #${orderId}.`);
});
orderEmitter.on('orderShipped', (orderId) => {
  console.log(`[Event: orderShipped] Order #${orderId} has been shipped to the customer.`);
});
console.log("--- E-Commerce Order Process Started ---\n");

orderEmitter.emit('orderPlaced', 501, 'Bob');

orderEmitter.emit('paymentReceived', 501, 150.00);
orderEmitter.emit('orderShipped', 501);
console.log("\n--- E-Commerce Order Process Completed ---");