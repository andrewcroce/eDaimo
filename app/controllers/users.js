//var User = require('../models/user');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var app;

module.exports = {
	
	init : function(application) {
		app = application;
	},
	
	login : function(req, res) {
		res.render('users/login',{
			locals : {
				redirect : req.query.redirect || ''
			}
		});
	},
	
	register : function(req, res) {
		res.render('users/register');
	},
	
	create : function(req, res) {
		var user = new User({
			profile : req.body.profile
		}).save();
		req.flash('message','Welcome '+ req.body.profile.name.first)
		res.redirect('/');
	},
	
	listAll : function(req, res) {
		User.find({},function(){
			res.render('users/index');
		});
	}
	
	
}