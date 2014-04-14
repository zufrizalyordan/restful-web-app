var express = require('express');
var router = express.Router();

// database access
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/rwa", {native_parser:true});

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
