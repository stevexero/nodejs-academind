// What the user sees

const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

// const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

// ** Cut
// (req, res, next) => {
//   // console.log(adminData.products);
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   const products = adminData.products;
//   res.render('shop', { prods: products, docTitle: 'Shop', path: '/shop' });
// }

module.exports = router;
