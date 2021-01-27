const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// the order of the imports dont matter

app.use(express.urlencoded({ extended: false }));

app.use('/favicon.ico', (req, res, next) => {
  res.sendStatus(204);
});

// /admin is a filter that must be added to the route
app.use('/admin', adminRoutes); // considers our routes in the admin.js routes. Also, order matters.

app.use(shopRoutes); // Again, this order matters. However, if using get, its an exact match. Just keep this in mind

app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
