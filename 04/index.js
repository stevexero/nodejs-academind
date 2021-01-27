// const http = require('http');

const express = require('express');

const app = express();

// Allows us to use express's middleware function
// Pass a function to it, will be executed for every incoming request
// Next is a function that will be passed to the function and has to be executed before it can process the next function
// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next(); // Have to call before executing the next function
// Allows the request to continue to the next middleware in line
// });

app.use('/favicon.ico', (req, res, next) => {
  res.sendStatus(204);
});

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In product middleware');
  res.send('<h1>Add product page</h1>');
  // If you're sending a response, don't call next as it will result in an error
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  // res.setHeader - you CAN override the express setHeader
  res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);

const PORT = 3000;

// server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
