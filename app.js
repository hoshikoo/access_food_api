var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var moment = require('moment');
var https = require('https');
var Parse = require('parse/node').Parse;

var config = require('./lib/config.json');

var app = express();


/* Setup and Config */
var proj = {
  express: express,
  // moment: moment,
  config: config,
};

/*
  Set Up Web Server
*/
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// function logger(req, res, next) {
//   console.log('%s %s %s', req.method, req.url, req.path);
//   next(); //continue
// }

// //log all webrequests to logfile and console?
// app.use(logger);

// // // load routes 
// // app.use('/api/v1/test', require('./lib/api/v1/test.js')(proj));


// // catch all static files that exist 
// app.use(express.static(__dirname + '/www'));


//Catch other routes for static html files
//404 for uncaught errors
app.use(function(req, res, next) {
  res.send(404, 'page not found');
});

Parse.initialize('f6l2pZcEvoOFI1O1mvueXd3Wz0bijxEg17qFmvsm', 'HfTQBGgQHmtn13Og4CiV94qUgVh5DOTch1jGuv1p');

https.get('https://api.parse.com/1/users', function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });

}).on('error', function(e) {
  console.error(e);
});



// Start listening on web port
// Note: port is assigned to server and not app so it can be used by both express and socket.io
console.log('Listening on port ' + proj.config.webport + ' settings');
app.listen(proj.config.webport);