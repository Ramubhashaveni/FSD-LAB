const fs = require("fs");

console.log("===========================================");
console.log("ASYNCHRONOUS FILE READING DEMONSTRATION");
console.log("===========================================\n");

console.log("Reading file asynchronously...\n");

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }

    console.log("File Contents:");
    console.log(data);

    console.log("\nFile read completed successfully.");
});

console.log("Program continues executing without waiting...");