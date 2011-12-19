
/*
 * GET home page.
 */

exports.index = function(req, res){
  var fs        = require('fs');
  fs.readFile('public/blogs.json', function(err, data) {
      if (err) throw err;
      res.render('index', { title: 'index', blogs: JSON.parse(data) } )
  });
};
