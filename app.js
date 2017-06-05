var express = require('express');
var app = express();
var nodeVersion = JSON.stringify(process.version);

app.get('/', function (req, res) {
  res.send('MNAS is up with node version ' + nodeVersion);
});

app.listen(3333, function () {
  console.log('MNA listening on port 3333 ! Node version : ' + nodeVersion);
});

