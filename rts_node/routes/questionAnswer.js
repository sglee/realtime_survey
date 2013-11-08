
var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/rts_development');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Question_Answer = new Schema({
	paper_id: Number,
	directive_no: Number,
	custom_id: String,
	question_no: Number,
  	answer: String
});

var questionAnswer = mongoose.model('Question_Answer', Question_Answer);

exports.save = function(data, sockets){
	var answer = new questionAnswer(data);
	answer.save(function(err){
		if(err)
			console.log('failed...save answer');
	})
};

function cleanup() {
    mongoose.disconnect();
}