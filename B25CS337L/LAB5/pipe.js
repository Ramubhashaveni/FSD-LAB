const fs = require("fs");

// Create a Readable Stream
const reader = fs.createReadStream("source.txt");

// Create a Writable Stream
const writer = fs.createWriteStream("destination.txt");

// Copy data using pipe()
reader.pipe(writer);

// Display message when copying is completed
writer.on("finish", () => {
    console.log("File copied successfully.");
});

// Handle errors
reader.on("error", (err) => {
    console.log("Error while reading:", err.message);
});

writer.on("error", (err) => {
    console.log("Error while writing:", err.message);
});