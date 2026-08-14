const fs = require("fs");

fs.readFile("student.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    const student = JSON.parse(data);

    console.log("Student Details");
    console.log("-----------------------");
    console.log("Roll No :", student.rollNo);
    console.log("Name    :", student.name);
    console.log("Dept    :", student.department);
    console.log("CGPA    :", student.cgpa);
});