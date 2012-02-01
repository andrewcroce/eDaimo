
/**
 * Module dependencies.
 */

var express 	= require('express'),
	mongoose 	= require('mongoose'), 
	
	site 			= require('./routes/site'),
	devices = require('./routes/devices'),
	
	app = module.exports = express.createServer();
	
	

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});



// Routes

app.get('/', site.index);
app.get('/devices', devices.data);


app.listen(3000);
mongoose.connect('mongodb://admin:pass@staff.mongohq.com:10001/edaimo_mongodb');
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
