var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

// static content
app.use(express.static(path.join(__dirname, './client/static')));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// require routes, connects to routes
var routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})