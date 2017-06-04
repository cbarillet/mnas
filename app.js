var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('MNA is up!');
});

app.listen(3333, function () {
  console.log('MNA listening on port 3333!');
});

