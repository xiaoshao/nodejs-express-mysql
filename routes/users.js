var express = require('express');
var router = express.Router();
var dbClient = require('../db/dbClient');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next){
	res.render('add', {"title" : "Join In"});
});

router.post('/add', function(req, res, next){
	console.log(req.body.userName);
	dbClient.execute('select * from user', function(error, res, fields){
		console.log(res);
	});
	console.log("this is post");
});

module.exports = router;
