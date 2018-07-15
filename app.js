//Include express library
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Create App server
var app = express();

//Create mangoose instance
var db = mongoose.connect('mongodb://localhost:27017/bookAPI');
//Create reference to include bookModel 
var Book = require('./models/bookModel');

//Read port from environment process; if not exist then hardcode
var port = process.env.PORT || 3000;

//Configure the bodyParser to read the JSon info
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Inject db model to route function and execute route to load to bookRouter
var bookRouter = require('./routes/bookRoutes.js')(Book);

//Configure the base for API routing 
app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);

//setup handler for route
app.get('/', function(req, res){
    res.send('Welcome to my new API');
});

//Have express start listening on the port
app.listen(port, function(){
    console.log('Running on port:'+ port);
});