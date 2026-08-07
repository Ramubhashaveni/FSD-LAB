console.log("===========================================");
console.log("SIMPLE EVENT QUEUE IMPLEMENTATION");
console.log("===========================================\n");
let eventQueue = [];

function addTask(task) {
    eventQueue.push(task);
    console.log("Task Added: " + task);
}
function executeTask() {
    console.log("\nExecuting Tasks...\n");

    while (eventQueue.length > 0) {
        let task = eventQueue.shift();
        console.log("Processing: " + task);
    }

    console.log("\nAll Tasks Completed Successfully.");
}

addTask("File Reading");
addTask("Database Query");
addTask("API Request");

executeTask();