
var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/rts_development');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// :user_id, :paper_id, :start_date, :status, 
//:groupinfo_code, :groupinfo_name, :paper_type_code, :paper_type_name
var Paper_History = new Schema({
	user_id: String,
	paper_id: Number,
	start_date: Date,
	status: String,
	groupinfo_code: String,
	groupinfo_name: String, 
	paper_type_code: String,
	paper_type_name: String
});

// mongoose.model('ModelName', SchemaName);
var paperHistory = mongoose.model('Paper_History', Paper_History);

exports.load = function(data, sockets){
	paperHistory.find({user_id:data.user_id}).exec(function(err, results){
		if(!err){
			console.log('paperHistory --> data user_id:' + data.user_id);
			sockets.emit('send:sPaperHistory', results); // Send message to sender 
			//sockets.broadcast.emit('send:sPaperHistory', results); // Send Message to every one But sender.
			
			/*
			var channel = data.user_id;
			console.log('debug log:' + channel);
			delete data.user_id;
			//sockets.broadcast.to(channel, data).emit("send:sPaperHistory", results);
			sockets.broadcast.in(channel).emit("send:sPaperHistory", results);
			//sockets.sockets.in(channel).emit("send:sPaperHistory", results);
			*/
			console.log('Data is -->' + results);
		}else{
			console.log('everything is empty');
			//sockets.emit('send:sPaperHistory', {});
		}
			//cleanup();

	});
};

exports.loadByPaper = function(data, sockets){
	paperHistory.find({paper_id: data.paper_id}).exec(function(err, results){
		if(!err){
			console.log('load paperHistory by paper_id --> ' + results);
			sockets.emit('send:sPaperHistory', results); 
		}else{
			console.log('everything is empty');
		}
	});
};

function cleanup() {
    mongoose.disconnect();
}