const buffer = Buffer.alloc(50);

// Write text into the buffer
buffer.write("Welcome to Node.js Buffer");

// Display buffer contents
console.log("Buffer Contents:");
console.log(buffer);

// Convert buffer into string
console.log("\nString Data:");
console.log(buffer.toString());