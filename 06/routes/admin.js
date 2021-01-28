// This route handles the creation of products which the admin of the shop can do

const express = require('express');

const path = require('path');

// const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// ** Cut the following to add to the controllers...
// (req, res, next) => {
//   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//   res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
// }

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// ** Cut
// (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// }

module.exports = router;
