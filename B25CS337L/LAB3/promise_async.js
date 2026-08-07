// Promise-Based Asynchronous Program

console.log("===========================================");
console.log(" PROMISE-BASED ASYNCHRONOUS PROGRAM");
console.log("===========================================\n");

function performTask() {
    return new Promise((resolve, reject) => {
        console.log("Task Execution Started...\n");

        let success = true;

        setTimeout(() => {
            if (success) {
                resolve("Task Completed Successfully.");
            } else {
                reject("Task Failed.");
            }
        }, 3000);
    });
}

performTask()
    .then((message) => {
        console.log(message);
        console.log("Promise Resolved Successfully.");
    })
    .catch((error) => {
        console.log(error);
        console.log("Promise Rejected.");
    });

console.log("Program Continues Without Waiting...");