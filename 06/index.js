const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/favicon.ico', (req, res, next) => {
  res.sendStatus(204);
});

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h1>');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
