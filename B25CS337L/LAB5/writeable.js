const fs = require("fs");

// Create a Writable Stream
const writer = fs.createWriteStream("output.txt");

// Write data into the file
writer.write("Welcome to Node.js Streams.\n");
writer.write("This data is written using a Writable Stream.\n");
writer.write("Streams are useful for handling large amounts of data.\n");

// Finish writing
writer.end();

// Display message when writing is completed
writer.on("finish", () => {
    console.log("Data written successfully to output1.txt");
});

// Handle errors
writer.on("error", (err) => {
    console.log("Error while writing:", err.message);
});