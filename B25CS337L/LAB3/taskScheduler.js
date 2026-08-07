console.log("===========================================");
console.log("TASK SCHEDULER");
console.log("===========================================\n");

let tasks = [];

function addTask(task) {
    tasks.push(task);
}

function executeTasks() {
    if (tasks.length === 0) {
        console.log("All Tasks Completed.");
        return;
    }

    let task = tasks.shift();

    console.log("Executing:", task);

    setTimeout(() => {
        executeTasks();
    }, 1000);
}

addTask("Read File");
addTask("Database Connection");
addTask("Send Email");
addTask("Generate Report");

executeTasks();