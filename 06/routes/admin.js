// This route handles the creation of products which the admin of the shop can do

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(JSON.stringify(req.body));
  res.redirect('/');
});

module.exports = router;
