const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.render('home', { pageTitle: 'HOME', path: '/home' });
});

router.post('/add-user', (req, res, next) => {
  users.push({ title: req.body.title });

  res.redirect('/');
});

exports.routes = router;
exports.users = users;
