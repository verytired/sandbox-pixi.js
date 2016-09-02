var express = require('express');
var app = express();

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// var express = require("express");
// var app = express();
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function (req, res) {
//   fs.readFile('src/html/index.html', 'utf-8', function (err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/plain'});
//       res.write('not found!');
//       return res.end();
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);
// console.log('server started on 8080');