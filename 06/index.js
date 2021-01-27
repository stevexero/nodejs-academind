const app = require('express')();

app.use((req, res) => {
  console.log('connect');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
