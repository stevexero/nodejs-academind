const express = require('express');
const path = require('path');
const app = express();

const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoute);
app.use(homeRoute);

app.listen(3000, () => console.log('Server started on port 3000'));
