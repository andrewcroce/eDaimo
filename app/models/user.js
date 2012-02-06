var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
	type : {
		type : ObjectId,
		default : '4f2c4c477417cf0005000001'
	},
	status : ObjectId, //Foreign key for User Status
	created : {
		type : Date, 
		default : Date.now
	},
	modified : Date,
	profile : {
		name : {
			first : String,
			last : String
		},
		email : String
		//Additional properties to be added
	}
});

module.exports = mongoose.model('User', userSchema);