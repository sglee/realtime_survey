var mongoose = require('mongoose');
var db =mongoose.connect('mongodb://localhost/rts_development');
/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
	console.log('connection successful....');
});
*/

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var GroupInfo = new Schema({
	code: String,
	name: String,
	is_use: String,
	user_id: String
});

// mongoose.model('ModelName', SchemaName);
var groupModel = mongoose.model('GroupInfo', GroupInfo);

exports.load = function(data, sockets){
	groupModel.find({user_id:data.user_id},function(err, docs){
		if(docs.length){
			sockets.emit('send:group', docs);
			console.log('Data is -->' + docs);
		}else{
			console.log('everything is empty');
			sockets.emit('send:group', {});
		}
	});
};