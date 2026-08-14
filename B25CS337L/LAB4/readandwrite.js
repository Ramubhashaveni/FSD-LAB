const fs = require("fs");

// Create Read Stream
const reader = fs.createReadStream("./input.txt");

// Create Write Stream
const writer = fs.createWriteStream("./output.txt");

// Copy data
reader.pipe(writer);

console.log("File copied successfully.");