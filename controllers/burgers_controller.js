var experess = require("express");
var router = experess.Router();
var burger = require("../models/burger.js");

router.get('/', function(req,res){
	burger.all(function(data){
		res.render('index', {burger: data});
	});
});

router.post('/create', function(req, res){
	burger.create(req.body.type, false, function(){
		res.redirect('/')
	})
});

router.put("/update/:id", function(req, res){
	burger.update(req.params.id, function(err, data){
		res.redirect('/');
	})
});

module.exports = router;
