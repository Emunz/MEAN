
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

// static content 
app.use(express.static(path.join(__dirname, "./client/static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require routes, connects to routes
var routes_setter = require('./server/config/routes.js')
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})