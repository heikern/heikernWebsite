var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

app.use('/',routes);


app.listen(3000, function(){
    console.log('app is listening on port 3000');
})