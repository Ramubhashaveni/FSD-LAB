// Import HTTP module
const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    // Send response
    res.end(`
        <h1>Welcome to Node.js</h1>
        <p>HTTP Server is running successfully.</p>
    `);
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});