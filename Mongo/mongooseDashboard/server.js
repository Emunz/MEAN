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
mongoose.Promise = global.Promise;

var RabbitSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true},
    age: {type: Number, min: 1, max: 150, required: true},
    hometown: {type: String, minlength: 2, required: true},
    favoriteFood: {type: String, minlength: 3, required: true}
})
mongoose.model('Rabbit', RabbitSchema);
var Rabbit = mongoose.model('Rabbit')

// Homepage
app.get('/', function (req, res) {
    Rabbit.find({}, function(error, rabbits){
        
    res.render('index', {rabbits: rabbits})
    })
})

// Page with form for new user
app.get('/rabbit/new', function (req, res) {
    console.log("the fuck?")
    res.render('newuser')
})


// User profile page
app.get('/rabbit/:id', function (req, res) {
    Rabbit.findOne({_id : req.params.id}, function(err, singleRabbit){
        res.render('userprofile', {rabbit: singleRabbit})
    })
})

// Edit profile page
app.get('/rabbit/edit/:id', function (req, res) {
    Rabbit.findOne({_id : req.params.id}, function(err, singleRabbit){
        res.render('edituser', {rabbit: singleRabbit})
    })
})

// User profile page
app.get('/rabbit/destroy/:id', function (req, res) {
    Rabbit.remove({_id : req.params.id}, function(err){
        res.redirect('/')
    })
})

// Post route for updating user
app.post('/rabbit/update/:id', function (req, res) {
    console.log("POST DATA", req.body);

    Rabbit.findOne({_id : req.params.id}, function(err, singleRabbit){
        singleRabbit.age = req.body.age,
        singleRabbit.hometown = req.body.hometown,
        singleRabbit.favoriteFood = req.body.favoriteFood
        singleRabbit.save(function(err) {
          // if there is an error console.log that something went wrong!
            if(err) {
            console.log('something went wrong');
            res.render('edituser', {errors: rabbit.errors});
            } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
            }
        })
    })
    
})

// Post route for creating new user
app.post('/rabbit/createnew', function (req, res) {
    console.log("POST DATA", req.body);

    var rabbit = new Rabbit({name: req.body.name, age: req.body.age, hometown: req.body.hometown, favoriteFood: req.body.favoriteFood});

    rabbit.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        res.render('newuser', {errors: rabbit.errors});
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
        }
    })
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})