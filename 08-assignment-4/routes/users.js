const express = require('express');

const router = express.Router();

const userData = require('./home');

router.get('/users', (req, res) => {
  const users = userData.users;
  res.render('users', { users: users, pageTitle: 'USERS', path: '/users' });
});

module.exports = router;
