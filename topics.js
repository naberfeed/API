var express = require('express');
var router  = express.Router();
var db      = require('./db');

//Return most recent topics
router.get('/',function(req,res){
	//res.end("serve topics JSON response");
	res.jsonp(db.getTopics());
});

/*
TO DO: Implement search
router.get('/?*',function(req,res){});
*/

module.exports = router;