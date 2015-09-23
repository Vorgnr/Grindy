var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8088);
