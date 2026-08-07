console.log("CALLBACK FUNCTION DEMONSTRATION");
function performTask(callback) {
    console.log("Task Execution Started...\n");
    console.log("Performing Task...\n");
    callback();
}
function taskCompleted() {
    console.log("Task Completed Successfully.\n");
    console.log("Callback Function Executed.\n");
}
performTask(taskCompleted);

console.log("Program Execution Finished.");