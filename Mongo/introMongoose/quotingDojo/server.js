var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/rabbit_db');
rabbit.Promise = global.Promise;

var RabbitSchema = new rabbit.Schema({
    name: String,
    age: Number,
    hometown: String,
    favoriteFood: String
})

rabbit.model('Rabbit', RabbitSchema);
var Rabbit = rabbit.model('Rabbit')

app.get('/', function (req, res) {
    Rabbit.find({}, function(error, rabbits){
        
    res.render('index', {rabbits: rabbits})
})

// Add User Request 
app.post('/rabbit/createnew', function (req, res) {
    console.log("POST DATA", req.body);

    var rabbit = new Rabbit({name: req.body.name, age: req.body.age, hometown: req.body.hometown, favoriteFood: req.body.favoriteFood});

    rabbit.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        res.redirect('/rabbit/new');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a quote!');
        res.redirect('/');
        }
    })
})

app.get('/quotes', function (req, res) {
    
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})