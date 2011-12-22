
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "i19f40cff25702bd0226980df59566dd7" }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.dynamicHelpers({
  session: function (req, res) {
    return req.session;
  }
});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

// Get
app.get('/', routes.index);
app.get('/logout', routes.logout);
app.get('/category/:category?', routes.category);

// Post
app.post('/login', routes.login);
app.post('/get_all_categories', routes.get_all_categories);
app.post('/add_post', routes.add_post);

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
