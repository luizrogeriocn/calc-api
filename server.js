// BASE SETUP
// ==============================================

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
var calculator = require('calculator');

app.use(bodyParser());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Origin', 'http://gcm-layout.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.status(200).sendfile('./index.html');	
});

app.post('/add', function(req, res) {
    var result = calculator.sum(req.body.numA, req.body.numB);
	
	console.log(result);
	res.send(result.toString());	
});

app.post('/sub', function(req, res) {
	var result = calculator.subtract(req.body.numA, req.body.numB);
	console.log(result);
	res.send(result.toString());
});

app.post('/mult', function(req, res) {
	var result = calculator.multiply(req.body.numA, req.body.numB);
	console.log(result);
	res.send(result.toString());	
});

app.post('/div', function(req, res) {
	var result = calculator.sum(req.body.numA, req.body.numB);
	console.log(result);
	res.send(result.toString());	
});
// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
