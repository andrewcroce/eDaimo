
/**
 * User Model
 */
var mongoose = require('mongoose'),
	auth = require('mongoose-auth'),
	UserSchema = new mongoose.Schema({
		user_type : Number,
		user_status : Number,
		profile : {
			name : {
				first : String,
				last : String
			},
			email : { type : String, validate : /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/ },
			address : {
				street : String,
				city : String,
				region : String,
				country_id : Number,
				zip : String
			},
			phone : String,
			twitter : String,
			facebook : String,
			google : String,
			skype : String,
			yahoo : String,
			msn : String,
			site_url : String
		}
	});

module.exports = mongoose.model('User', UserSchema);