const fs = require("fs");

// Create a Readable Stream
const reader = fs.createReadStream("largefile.txt");

// Create a Writable Stream
const writer = fs.createWriteStream("copy.txt");

// Connect Readable Stream to Writable Stream
reader.pipe(writer);

// Display message when copying is completed
writer.on("finish", () => {
    console.log("Large file copied successfully.");
});

// Handle errors
reader.on("error", (err) => {
    console.log("Error while reading:", err.message);
});

writer.on("error", (err) => {
    console.log("Error while writing:", err.message);
});