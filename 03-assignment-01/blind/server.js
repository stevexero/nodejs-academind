const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Heya</h1>');
    res.write('<form action="/add-todo" method="POST">');
    res.write('<input type="text" name="todo" />');
    res.write('<button type="submit">Add</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/add-todo' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const todo = parsedBody.split('=')[1];
      fs.writeFile('todo.txt', todo, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>404 Not Found</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
