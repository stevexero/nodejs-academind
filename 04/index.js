const http = require('http');

const express = require('express');

const app = express();

// Allows us to use express's middleware function
// Pass a function to it, will be executed for every incoming request
// Next is a function that will be passed to the function and has to be executed before it can process the next function
app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Have to call before executing the next function
  // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware');
  // ...
});

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
