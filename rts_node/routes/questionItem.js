
var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/rts_development');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Question_Item = new Schema({
	paper_id: Number,
	directive_no: Number,
	directive_content: String,
	question: String,
	img_url: String,
	question_no : Number
});

var questionItem = mongoose.model('Question_Item', Question_Item);

exports.load = function(data, sockets){
	if(data.seq == 0){
		questionItem.find({paper_id:data.paper_id})
		.limit(1)
		//.sort('-directive_no')
		.exec(function(err, results){
			if(!err){	
				//sockets.emit('res:paperInfo', results); // Send message to sender 
				//sockets.broadcast.emit('res:questionItem', results); // Send Message to every one But sender.

				questionItem.find({paper_id:results[0].paper_id, directive_no: results[0].directive_no})
				//.sort('-directive_no')
				.exec(function(err, rst){
					if(!err){
						sockets.emit('res:paperInfo', rst); // Send message to sender 
						console.log('Data is -->' + rst);
					} else{
						console.log('error questionItem loading');
					}

				});
			}else{
				console.log('everything is empty');
			}
				//cleanup();
			});
	}else{
		questionItem.find({paper_id:data.paper_id})
		.where('directive_no').gt(data.directive_no)
		.limit(1)
		//.sort('-directive_no')
		.exec(function(err, results){
			if(!err){
				questionItem.find({paper_id:results[0].paper_id, directive_no: results[0].directive_no})
				//.sort('-directive_no')
				.exec(function(err, rst){
					if(!err){
						sockets.emit('res:paperInfo', rst); // Send message to sender 
						console.log('Data is -->' + rst);
					}
				});
			}else{
				console.log('everything is empty');

			}
				//cleanup();
		});
	}
};

function cleanup() {
    mongoose.disconnect();
}