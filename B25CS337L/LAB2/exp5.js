console.log("=== 1. Callback Function Demo ===");

function processUserData(username, callback) {
  console.log(`Processing data for user: ${username}...`);
  
  setTimeout(() => {
    const status = "Success";
   callback(username, status);
  }, 1000);
}
unction
processUserData("Alice", (user, result) => {
  console.log(`[Callback Executed] User '${user}' registration status: ${result}\n`);
});

console.log("=== 2. Timer Functions Demo ===");
console.log("Setting a timeout for 2 seconds...");
setTimeout(() => {
  console.log("[setTimeout] 2 seconds have passed. This message runs only once.");
}, 2000);
let count = 0;
console.log("Setting an interval to run every 1 second...");

const intervalId = setInterval(() => {
  count++;
  console.log(`[setInterval] Tick count: ${count}`);
  if (count === 3) {
    clearInterval(intervalId);
    console.log("[clearInterval] Interval cleared. Program complete.");
  }
}, 1000);