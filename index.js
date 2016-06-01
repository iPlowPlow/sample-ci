var express = require('express');
var api = express();


api.get('/', function(req,res,next){
	res.send("hello word");
});


var port = process.env.port || DEFAULT_PORT;
console.log('server started on port 3000');
api.listen(3000);

module.exports = api;