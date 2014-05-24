// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8888;

// ROUTES
// ==============================================

app.get('/', function(req, res) {
	res.send('OI, GABI!');	
});

app.post('/add', function(req, res) {
	res.send('OI, GABI!');	
});



// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);