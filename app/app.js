var express = require('express');
var mongoose = require('mongoose');
var io = require('socket.io');
var connect_auth = require('connect-auth'); //Not being used
var expose = require('express-expose');
var config = require('./config');
var MongoStore = require('connect-mongo');

var app = express.createServer();


//Connect to database

mongoose.connect(config.db_uri);



//Configuration

app.configure(function(){
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use(express.cookieParser());
	app.use(express.session({ 
		secret : config.secret,
		store : new MongoStore({
			url : config.db_uri
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

app.exposeRequire();



// Models

var User = require('./models/user');



// Controllers

var auth = require('./controllers/auth'); auth.init(app);
var pages = require('./controllers/pages'); pages.init(app);
var users = require('./controllers/users'); users.init(app);
var devices = require('./controllers/devices'); devices.init(app);



// Routes

app.get('/', pages.home);
app.get('/admin', /*auth.requiresLogin,*/ pages.admin);
app.get('/users/index', /*auth.requiresLogin,*/ users.listAll);
app.get('/login', users.login);
app.get('/register', users.register);
app.get('/profile', users.profile);
app.get('/devices', devices.listAll);

app.post('/user/create', users.create);





app.listen(3000);
