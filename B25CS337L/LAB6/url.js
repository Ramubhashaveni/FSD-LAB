const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {

    // Create URL object
    const url = new URL(
        req.url,
        `http://${req.headers.host}`
    );

    // Process GET request for home page
    if (req.method === "GET" && url.pathname === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>
                <h1>Student Information</h1>

                <h2>Query String Example</h2>

                <a href="/student?name=Waseem&department=CSE">
                    View Student
                </a>

                <h2>Student Form</h2>

                <form method="POST" action="/submit">

                    <label>Name:</label>
                    <input type="text" name="name" required>
                    <br><br>

                    <label>Department:</label>
                    <input type="text" name="department" required>
                    <br><br>

                    <button type="submit">Submit</button>

                </form>
            </body>
            </html>
        `);
    }

    // Process query string
    else if (
        req.method === "GET" &&
        url.pathname === "/student"
    ) {

        const name = url.searchParams.get("name");
        const department = url.searchParams.get("department");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>
                <h1>Student Details</h1>

                <p><b>Name:</b> ${name}</p>
                <p><b>Department:</b> ${department}</p>
            </body>
            </html>
        `);
    }

    // Process form parameters
    else if (
        req.method === "POST" &&
        url.pathname === "/submit"
    ) {

        let body = "";

        // Receive form data
        req.on("data", (chunk) => {
            body += chunk;
        });

        // Process complete form data
        req.on("end", () => {

            const formData = new URLSearchParams(body);

            const name = formData.get("name");
            const department = formData.get("department");

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(`
                <html>
                <body>
                    <h1>Form Submitted Successfully</h1>

                    <p><b>Name:</b> ${name}</p>
                    <p><b>Department:</b> ${department}</p>
                </body>
                </html>
            `);
        });
    }

    // Invalid URL
    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
        `);
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});