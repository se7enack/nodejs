var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hola');
});


app.listen(80);
console.log('listening on port 80');

