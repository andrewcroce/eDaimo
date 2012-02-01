
/**
 * User Model
 */
var mongoose = require('mongoose'),
	auth = require('mongoose-auth'),
	Schema = mongoose.Schema,
	User;

module.exports = new Schema({
	
	name : {
		first : String,
		last : String
	},
	
});

module.exports.plugin(auth, {
	facebook: true
});