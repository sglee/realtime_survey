var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/rts_development');


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
	groupModel.find({user_id:data.user_id}).exec(function(err, results){
		if(!err){
			sockets.emit('send:group', results);
			console.log('Data is -->' + results);
		}else{
			console.log('everything is empty');
			sockets.emit('send:group', {});
		}

			//cleanup();
	});



/*
    q.exec(function (err, results) {
      if (err) throw err;
      console.log("Are the results MongooseDocuments?: %s", results[0] instanceof mongoose.Document);

      console.log(results);
      cleanup();
    });
*/

};

function cleanup() {
    mongoose.disconnect();
}