var orm = require("../config/orm.js");


var burger = {

	all: function(cb){
		orm.all(function(res){
			cb(res)
		});
	},

	create: function(name, dev, cb){
		orm.create(name, dev, function(res){
			cb(res);
		});
	},

	update: function(id, cb){
		orm.update(id, function(res){
			console.log('here'+res);
			cb(res);
		})
	}

};

module.exports = burger;