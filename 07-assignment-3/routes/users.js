const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/users', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;
