const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => `Server started on port ${PORT}`);
