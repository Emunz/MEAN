var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');

module.exports = {
  show: function(req, res) {
    Rabbit.find({}, function(error, rabbits){    
    res.render('index', {rabbits: rabbits})
    })
  },
  profile: function(req, res) {
    Rabbit.findOne({_id : req.params.id}, function(err, singleRabbit){
        res.render('userprofile', {rabbit: singleRabbit})
    })
  },
  editpage: function(req, res) {
    Rabbit.findOne({_id : req.params.id}, function(err, singleRabbit){
        res.render('edituser', {rabbit: singleRabbit})
    })
  },
  makeedit: function(req, res) {
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
  },
  create: function(req, res) {
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
  },
  delete: function(req, res) {
    Rabbit.remove({_id : req.params.id}, function(err){
        res.redirect('/')
    })
  }
}