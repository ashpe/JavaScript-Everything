
/*
 * GET home page.
 */

var database = require('../lib/database-handle.js');
var utility = require('../lib/utility-functions.js');

exports.index = function(req, res){
  var fs        = require('fs');
  var category  = req.session.default_category || 'JavaScript';
  res.redirect('/category/'+category);
};

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  database.authenticate(username, password, function(authed) {
    if (authed) {
      req.session.username         = username;
      req.session.user_level       = authed.user_level;
      req.session.default_category = authed.default_category;
    }
    res.redirect('/category/'+req.session.default_category);
  });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) throw err;
        res.redirect('/');
    });
};

// Right-menu filters.

exports.category = function(req, res) {
  var fs        = require('fs');
  var category  = req.params.category;
  fs.readFile('public/blogs.json', function(err, data) {
      if (err) throw err;
      var blogs = JSON.parse(data);
      res.render('index', { title: 'index', "blogs": blogs[category], "category": category, "categories": utility.getKeys(blogs) } )
  });
};


// Form submissions

exports.add_post = function(req, res) {

    
    var heading  = req.body.heading;
    var content  = req.body.content;
    var category = req.body.category;
    var fs       = require('fs');
    
    fs.readFile('public/blogs.json', function(err,data) {
        if (err) throw err;
        var blogs = JSON.parse(data);
        var new_blog = { 
          "heading": heading, 
          "content": content,
          "posted_by": req.session.username,
        };
        blogs[category].unshift(new_blog);
        fs.writeFile('public/blogs.json', JSON.stringify(blogs, null, 4), function(err) {
            if (err) throw err;
            res.redirect('/');
        });
  
    });

};


// Ajax requests API
 
exports.get_all_categories = function(req, res) {
    var fs        = require('fs');
    fs.readFile('public/blogs.json', function(err, data) {
      if (err) throw err;
      res.send(utility.getKeys(JSON.parse(data)));
    });
};
