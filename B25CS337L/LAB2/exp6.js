const EventEmitter = require('events');
class TicketManager extends EventEmitter {
  constructor(maxLimit) {
    super();
    this.maxLimit = maxLimit;
    this.currentTickets = 0;
  }
  buyTicket(email) {
    if (this.currentTickets < this.maxLimit) {
      this.currentTickets++;
      this.emit('buy', email, this.currentTickets);
    } else {
      
      this.emit('soldOut', email);
    }
  }
}
const ticketManager = new TicketManager(2);
ticketManager.on('buy', (email, ticketNumber) => {
  console.log(`[Success] Ticket #${ticketNumber} successfully booked for: ${email}`);
});

ticketManager.on('soldOut', (email) => {
  console.log(`[Alert] Sorry ${email}, all tickets are sold out!`);
});
console.log("--- Ticket Booking System Started ---\n");

ticketManager.buyTicket("alice@example.com");
ticketManager.buyTicket("bob@example.com");
ticketManager.buyTicket("charlie@example.com"); 

console.log("\n--- Ticket Booking System Ended ---");