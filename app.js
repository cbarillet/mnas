var express = require('express');
var app = express();
var nodeVersion = (process && process.versions) ? JSON.stringify(process.versions, null, 4) : 'process.versions unaivalable.';

app.get('/', function (req, res) {
  res.send('MNAS is up with ' + nodeVersion);
});

app.listen(3333, function () {
  console.log('MNA listening on port 3333 !');
  console.log(nodeVersion);
});

