// BASE SETUP
// ==============================================

var express			= require('express');
var bodyParser	= require('body-parser');
var app     		= express();
var port    		= process.env.PORT || 8888;

app.use(bodyParser());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.status(200).sendfile('./index.html');	
});

app.post('/add', function(req, res) {
	var result = parseFloat(req.body.numA) + parseFloat(req.body.numB);
	console.log(result);
	res.send(result.toString());	
});

app.post('/sub', function(req, res) {
	var result = parseFloat(req.body.numA) - parseFloat(req.body.numB);
	console.log(result);
	res.send(result.toString());
});

app.post('/mult', function(req, res) {
	var result = parseFloat(req.body.numA) * parseFloat(req.body.numB);
	console.log(result);
	res.send(result.toString());	
});

app.post('/div', function(req, res) {
	var result = parseFloat(req.body.numA) / parseFloat(req.body.numB);
	console.log(result);
	res.send(result.toString());	
});



// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
