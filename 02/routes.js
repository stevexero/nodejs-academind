const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<body>');
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end(); // If the if statement is hit, the return exits the function and won't execute any code afterwards
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]; // Takes the string to the right of the equal sign. ex: message=hello = 'hello'
      // fs.writeFileSync('message.txt', message); // Writes the file synchronously, meaning no code is executed until this file is written.
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Hello World!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
