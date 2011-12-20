
/*
 * GET home page.
 */

var database = require('../lib/database-handle.js');

exports.index = function(req, res){
  var fs        = require('fs');
  fs.readFile('public/blogs.json', function(err, data) {
      if (err) throw err;
      res.render('index', { title: 'index', blogs: JSON.parse(data) } )
  });
};

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  database.authenticate(username, password, function(authed) {
    if (authed) {
      req.session.username   = username;
      req.session.user_level = authed;
    }
    res.redirect('/');
  });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) throw err;
    });
    res.redirect('/');
};
