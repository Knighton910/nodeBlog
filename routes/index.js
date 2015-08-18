var express = require('express');
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeBlog');

var router = express.Router();

/* homepage blog posts */
router.get('/', function(req, res, next) {
  var db = req.db;
  var posts = db.get('posts');
  posts.find({},{}, function(err, posts) {
    res.render('index',{
      "posts": posts
    })
  })
});

module.exports = router;
