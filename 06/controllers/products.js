// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', { prods: products, docTitle: 'Shop', path: '/shop' });
  });
};
