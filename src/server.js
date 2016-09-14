
var http = require('http');
var fs = require('fs');
var mime= require('mime');

http.createServer(function (req, res) {

  // Check File Path
  var path;
  if(req.url === '/') {
    path = 'public/index.html';
  } else {
    path = './' + req.url;
  }

  // Read File and Write
  fs.readFile(path, function (err, data) {
    if(err) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      return res.end(req.url + ' not found.');
    }
    var type = mime.lookup(path);
    res.writeHead(200, {"Content-Type": type});
    res.write(data);
    res.end();
  });

}).listen(8080);

console.log('server started on 8080');
