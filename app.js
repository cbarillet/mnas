var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('MNAS is up with node version ' + JSON.stringify(process.version, null, 4));
});

app.listen(3333, function () {
  console.log('MNA listening on port 3333!');
});

