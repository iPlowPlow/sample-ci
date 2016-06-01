var express = require('express');
var api = express();
var port = process.env.port || DEFAULT_PORT;

api.get('/', function(req,res,next){
	res.send("hello word");
});

api.get('/contacts/:name', function(req,res,next){
	res.send();
})

api.get('/contacts/:name', function(req,res,next){
	res.send();
})

api.post('/contacts/:name', function(req,res,next){
	if (req.params.name ==="exist"){
		return res.status(403).send();
	}
});

api.put('/contacts/:name/:new', function(req,res,next){
	res.send();
});


api.delete('/contacts/:name/:new', function(req,res,next){
	res.send();
});


console.log('server started on port 3000');
api.listen(3000);

module.exports = api;