console.log("ASYNCHRONOUS PROGRAMMING DEMONSTRATION");
console.log("Program Started...\n");

setTimeout(() => {
    console.log("Asynchronous Task Completed Successfully.");
    console.log("\nProgram Execution Finished.");
}, 3000);

console.log("Executing Main Program...\n");
console.log("Program Continues Without Waiting...");