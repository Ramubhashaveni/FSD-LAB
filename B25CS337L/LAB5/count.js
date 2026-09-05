const fs = require("fs");

// Initialize counter
let totalBytes = 0;

// Create a Readable Stream
const reader = fs.createReadStream("input.txt");

// Count data processed chunk by chunk
reader.on("data", (chunk) => {
    totalBytes += chunk.length;
    console.log("Chunk processed:", chunk.length, "bytes");
});

// Reading completed
reader.on("end", () => {
    console.log("Reading completed.");
    console.log("Total data processed:", totalBytes, "bytes");
});

// Handle errors
reader.on("error", (err) => {
    console.log("Error while reading:", err.message);
});