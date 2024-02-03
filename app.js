// Require the Express module
const express = require('express');

// Create an Express app
const app = express();

// Define a port number
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
// Send a response with "Hello, world!"
res.send('Hello, world!');
});

// Start the app and listen on the port
app.listen(port, () => {
// Log a message to the console
console.log(`App is running on http://localhost:${port}`);
});

