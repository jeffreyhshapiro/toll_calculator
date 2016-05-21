var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = 3000;
var rp = require('request-promise');

app.use(logger('dev'));
app.use(express.static('public'));


app.get('/', function(req, res) {
  var filePath = process.cwd() + '/views/index.html'
  // console.log(filePath);
  res.sendFile(filePath);
});

app.get('/toll', function(req, res) {
  var apiURL = 'https://tce.cit.api.here.com/2/calculateroute.json';
  apiURL += '?app_id=dQ30U2cw9m9iJSTFpXJY';
  apiURL += '&app_code=uXANN2Bk5gaLiP2MF5JL8w';
  apiURL += '&currency=USD';
  apiURL += '&detail=1';
  apiURL += '&start_ts=2016-05-21T16:00:00';
  apiURL += '&vspec=3;2;1;3;2;0;5;400;400;12000;40000;0;0;0;1;6;1;0';
  apiURL += '&waypoint0=geo!40.756445,-73.987912';// get this from Google Maps Api
  apiURL += '&waypoint1=geo!40.354974,-74.348259';// get from Google Maps Api
  apiURL += '&metricsystem=metric';
  apiURL += '&maneuverattributes=none';
  apiURL += '&routeattributes=gr';
  apiURL += '&mode=fastest;truck';
  apiURL += '&jsonattributes=41';
  apiURL += '&combinechange=true';
  apiURL += '&linkattributes=none,rt,fl';
  apiURL += '&legattributes=none,li,sm';
  apiURL += '&language=en-us';
  apiURL += '&detail=1';

  // console.log(apiURL);

  var options = {
    method: 'GET',
    uri: apiURL
  };

  rp(options)
  .then(function (response) {
    var result = JSON.parse(response);
    console.log(result);
  })
  .catch(function (err) {
    if (err) throw err;
     // Delete failed...
  });
});

app.listen(PORT, function(req, res) {
  console.log('listening on PORT:' + PORT);
});
