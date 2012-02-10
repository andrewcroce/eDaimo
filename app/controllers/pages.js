var app;

module.exports = {
	
	init : function(application) {
		app = application;
	},
	
	home : function(req, res) {
		res.render('pages/home');
	},
	
	admin : function(req, res) {
		res.render('pages/admin');
	}
	
}