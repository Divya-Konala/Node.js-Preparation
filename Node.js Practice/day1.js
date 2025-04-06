// Import the built-in 'http' module to create a server
var http = require('http');

// Create an HTTP server which listen request and send responses
const server = http.createServer(function (req, res) {

  // Set the response header
  // 200 → status code for success
  // 'Content-Type' tells the browser what kind of data it's receiving (HTML in this case)
  //If we skip this line by default content-Type is 'text/plain' and status code is 200
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send part of the response body (will appear in browser)
  res.write("<h1>My World!</h1><br/>");

  // End the response and send the final message
  // After this, the server won't send anything else for this request
  res.end('Hello World!');

});

server.listen(8080); // Start the server and listen on port 8080


// Use 'npm init -y' to quickly create a package.json file with default settings

// Install nodemon as a development dependency to auto-restart the server on changes
// Command: npm install --save-dev nodemon

// In package.json, under "scripts", add the following line:
// "start": "nodemon myFirst.js"

// This allows you to start the server by simply running: npm start

// 🔗 Now, open your browser and go to: http://localhost:8080

// ✅ You’ll see: My World!Hello World!

