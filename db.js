var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:6666/nabr';

var getDocuments = function(db,callback){
	var collection = db.collection('topics');
	collection.find().
	sort({'count': -1, 'date_updated' : -1}).
	limit(10).
	toArray(function(err,docs){
		callback(docs);
	});
}

var searchDocuments = function(db,callback){
	var collection = db.collection('topics');
	collection.find().
	sort({'count': -1, 'date_updated' : -1}).
	limit(10).
	toArray(function(err,docs){
		callback(docs);
	});
}

MongoClient.connect(url, function(err,db){
	getDocuments(db,function(docs){
		exports.getTopics = function(){
			return docs;
		}
		db.close();
	});
});

MongoClient.connect(url, function(err,db){
	getDocuments(db,function(docs){
		exports.searchTopics = function(){
			return docs;
		}
		db.close();
	});
});