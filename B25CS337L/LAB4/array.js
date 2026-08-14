const fs = require("fs");

// Read JSON file
fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    // Parse JSON data
    const students = JSON.parse(data);

    // Display student details
    console.log("Student Details");
    console.log("------------------------------------------");

    students.forEach((student) => {
        console.log("Roll No :", student.rollNo);
        console.log("Name    :", student.name);
        console.log("Dept    :", student.department);
        console.log("CGPA    :", student.cgpa);
        console.log("------------------------------------------");
    });
});