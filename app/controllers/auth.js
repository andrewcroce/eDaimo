var connect_auth = require('connect-auth');
var app;

module.exports = {

	init : function(application) {
		app = application;
	},
	
	requiresLogin : function(req, res, next) {
		if(req.session.user) {
			next();
		} else {
			req.flash('warning', 'Not Authorized');
			res.redirect('/login?redirect=' + req.url);
		}
	},
	
	user : {
		hasAuthorization : function() {
			
		}
	}
	
};