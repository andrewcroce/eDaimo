var express = require('express');
var mongoose = require('mongoose');
var connect_auth = require('connect-auth'); //Not being used
var MongoStore = require('connect-mongo');
var db_uri = 'mongodb://admin:pass@staff.mongohq.com:10001/edaimo_mongodb';

var app = express.createServer();


//Connect to database

mongoose.connect(db_uri);



//Configuration

app.configure(function(){
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use(express.cookieParser());
	app.use(express.session({ 
		secret : 'w8723ded9sdb12h92d3',
		store : new MongoStore({
			url : db_uri
		})
	}));
});

app.configure('development', function(){
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.dynamicHelpers({
	messages: require('express-messages') 
});



// Controllers

var auth = require('./controllers/auth');
var pages = require('./controllers/pages');
var users = require('./controllers/users');



// Routes

app.get('/', pages.home);
app.get('/admin', auth.requiresLogin, pages.admin);
app.get('/login', users.login);
app.get('/register', users.register);
app.get('/profile', users.profile);

app.post('/user/create', users.create);


app.listen(3000);