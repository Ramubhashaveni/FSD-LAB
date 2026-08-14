const fs = require("fs");

// Create a read stream
const reader = fs.createReadStream("largefile.txt", {
    encoding: "utf8",
    highWaterMark: 20
});

// Read the file chunk by chunk
reader.on("data", (chunk) => {
    console.log("Received Chunk:");
    console.log(chunk);
    console.log("--------------------");
});

reader.on("end", () => {
    console.log("File reading completed.");
});

reader.on("error", (err) => {
    console.log("Error reading file:", err.message);
});