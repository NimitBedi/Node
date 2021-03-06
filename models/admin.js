var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var admin = new Schema({
	username:String,
	password:String,
	role:{
		type:String
	},
	amount:Number
});
admin.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin",admin);	
