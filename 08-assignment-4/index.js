const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const home = require('./routes/home');
const users = require('./routes/users');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(users);
app.use(home.routes);

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: '4o4' });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
