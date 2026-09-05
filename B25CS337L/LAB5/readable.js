const fs = require("fs");

// Create a Readable Stream
const reader = fs.createReadStream("input.txt", "utf8");

// Read data chunk by chunk
reader.on("data", (chunk) => {
    console.log("Received chunk:");
    console.log(chunk);
    console.log("--------------------");
});

// Reading completed
reader.on("end", () => {
    console.log("Reading completed.");
});

// Handle errors
reader.on("error", (err) => {
    console.log("Error:", err.message);
});