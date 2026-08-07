console.log("===========================================");
console.log("CALLBACK FUNCTION DEMONSTRATION");
console.log("===========================================\n");

function task(name, callback) {
    console.log(name + " Started");

    setTimeout(() => {
        console.log(name + " Completed");
        callback();
    }, 2000);
}

task("Task 1", () => {
    task("Task 2", () => {
        task("Task 3", () => {
            console.log("\nAll Tasks Completed Successfully.");
        });
    });
});

console.log("Main Program Continues...");