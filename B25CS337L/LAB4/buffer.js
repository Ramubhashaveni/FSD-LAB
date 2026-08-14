// SP2: Develop a Program Using Buffer Module

// Create a Buffer
const buffer = Buffer.from("Welcome to Node.js Buffer Module");

console.log("Buffer Contents");
console.log(buffer);

console.log("\nString Data");
console.log(buffer.toString());

console.log("\nBuffer Length");
console.log(buffer.length);


// Alloc and Write methods of Buffer
const bufferAlloc = Buffer.alloc(20);

bufferAlloc.write("NodeJS");

console.log("\nAllocated Buffer");
console.log(bufferAlloc.toString());


// Concat method
const buffer1 = Buffer.from("Hello ");
const buffer2 = Buffer.from("Students");

const result = Buffer.concat([buffer1, buffer2]);

console.log("\nConcatenated Buffer");
console.log(result.toString());


// Compare method
const buffer3 = Buffer.from("ABC");
const buffer4 = Buffer.from("XYZ");

const value = buffer3.compare(buffer4);

console.log("\nCompare Result");

if (value < 0)
    console.log("Buffer1 comes before Buffer2");
else if (value > 0)
    console.log("Buffer1 comes after Buffer2");
else
    console.log("Both are equal");