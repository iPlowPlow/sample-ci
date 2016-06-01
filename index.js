var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;
var port = process.env.port || DEFAULT_PORT;

api.get('/', function(req,res,next){
	res.send("hello word");
});

api.get('/contacts', function(req,res,next){
	res.send([]);
})

api.get('/contacts/:name', function(req,res,next){
	res.send();
})

api.post('/contacts/:name', function(req,res,next){
	if (req.params.name ==="exist"){
		return res.status(403).send();
	}
	res.send(200);
});

api.put('/contacts/:name/:new', function(req,res,next){
	res.send();
});


api.delete('/contacts/:name', function(req,res,next){
	res.send();
});


console.log('server started on port ' + port);
api.listen(port);

module.exports = api;