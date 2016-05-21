var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = 3000;

app.use(logger('dev'));
app.use(express.static('public'));


app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/views/index.html');
});

app.listen(PORT, function(req, res) {
  console.log('listening on PORT:' + PORT);
});
