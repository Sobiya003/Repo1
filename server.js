var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.once('open' , function(){
  console.log("Successfully connected to the database");
});

mongoose.connection.on('error' , function(){
  console.log('Could not connect to the database. Exiting now..');
  process.exit();
});

app.get('/',function (req,res) {
  res.json({"message": "Welcome to EasyNotes :)"});
});

require('./mainapp/routes/note.routes.js')(app);

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
