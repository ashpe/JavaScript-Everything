var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db');

exports.authenticate = function(username, password, authed) {
  db.get("SELECT user_level,default_category from user_login where username='"+username+"' and password='"+password+"'", function(err, row) {
    if (row == undefined) authed(false);
    else authed({ user_level: row.user_level, default_category: row.default_category });
  });
};
