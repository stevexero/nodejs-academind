const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First middleward');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second middleware');
//   res.send('Hello World');
// });

app.use('/users', (req, res) => {
  res.send('<ul><li>User 1</li><li>User 2</li></ul>');
});

app.use('/', (req, res) => {
  res.send('<h1>Hiya World</h1>');
});

app.listen(3000, () => console.log('Server started on port 3000'));
