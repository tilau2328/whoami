'use strict';

var express = require('express');

var app = express();
var routes = require('./app/routes/index.js');

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});