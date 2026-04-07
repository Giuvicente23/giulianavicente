const http = require('http');
const fs   = require('fs');
const path = require('path');

const ROOT = '/Users/giuliana/Desktop/giulianavicente';
const PORT = 8080;

const MIME = {
  '.html'  : 'text/html; charset=utf-8',
  '.css'   : 'text/css',
  '.js'    : 'text/javascript',
  '.png'   : 'image/png',
  '.jpg'   : 'image/jpeg',
  '.jpeg'  : 'image/jpeg',
  '.svg'   : 'image/svg+xml',
  '.woff'  : 'font/woff',
  '.woff2' : 'font/woff2',
  '.ico'   : 'image/x-icon',
};

http.createServer(function(req, res) {
  const url  = req.url.split('?')[0]; // strip query strings
  const file = path.join(ROOT, url === '/' ? 'index.html' : url);

  fs.readFile(file, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext  = path.extname(file).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(PORT, function() {
  console.log('Server running at http://localhost:' + PORT);
});
