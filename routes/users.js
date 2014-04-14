var express = require('express');
var router = express.Router();

// database access
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/rwa", {native_parser:true});

/* GET users listing. */
router.get('/', function(req, res) {

  db.collection('userlist').find().toArray(function (err, items) {
    res.json(items);
  })

});

router.post('/', function(req, res){

  db.collection('userlist').insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });

});

module.exports = router;
