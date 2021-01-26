const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Home</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Home</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username" />');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Users</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Users</h1>');
    res.write('<ul>');
    res.write('<li>steveanthony999</li>');
    res.write('<li>irish_rulz_green</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=input
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
  // If none of the routes above are hit, send a page not found response
};

module.exports = requestHandler;
