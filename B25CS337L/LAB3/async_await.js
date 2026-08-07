
console.log("===========================================");
console.log(" ASYNC/AWAIT TASK EXECUTION PROGRAM");
console.log("===========================================\n");

function performTask() {
    return new Promise((resolve) => {
        console.log("Task Execution Started...\n");

        setTimeout(() => {
            resolve("Task Completed Successfully.");
        }, 3000);
    });
}

async function executeTask() {
    console.log("Waiting for task to complete...\n");

    const result = await performTask();

    console.log(result);
    console.log("Async/Await Execution Finished.");
}

executeTask();

console.log("Program Continues Without Waiting...");