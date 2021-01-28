const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// the order of the imports dont matter

const notFoundControllers = require('./controllers/error');

app.use(express.urlencoded({ extended: false }));

// Granting access to the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/favicon.ico', (req, res, next) => {
  res.sendStatus(204);
});

// /admin is a filter that must be added to the route
app.use('/admin', adminRoutes); // considers our routes in the admin.js routes. Also, order matters.

app.use(shopRoutes); // Again, this order matters. However, if using get, its an exact match. Just keep this in mind

app.use(notFoundControllers.get404);

// CUT
// (req, res, next) => {
//   // res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
//   res.status(404).render('404', { docTitle: '404' });
// }

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
