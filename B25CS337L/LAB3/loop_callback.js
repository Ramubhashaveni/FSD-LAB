console.log("===========================================");
console.log("EVENT LOOP DEMONSTRATION");
console.log("===========================================\n");

console.log("Program Started");

setTimeout(() => {
    console.log("Callback Executed after 2 Seconds");
}, 2000);

console.log("Program Continues...");
console.log("Main Thread Finished");