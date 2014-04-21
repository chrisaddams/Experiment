var express = require('express');
stylus = require('stylus');
mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
function compile(str, path){
	return stylus(str).set('filename', path);
};
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(require("express-chrome-logger"));
app.use(stylus.middleware({
	src: __dirname + '/public',
	compile: compile
}));
app.use(express.static(__dirname+ '/public'));

if(env === 'development'){
	mongoose.connect('mongodb://localhost/Test_Project');
} else {
	mongoose.connect('mongodb://chris_gornall:gvc591d@ds035368.mongolab.com:35368/test_project');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
	console.log('test project db opened');
});

app.get('/partials/:partialPath', function(req, res){
	res.render('partials/' + req.params.partialPath);
});

app.get('/', function(req, res){
	res.render('index');
});
var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
