var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
  show: function(req, res) {
    People.find({}, function(error, people){    
    res.json(people)
    })
  },
  profile: function(req, res) {
    People.findOne({name : req.params.name}, function(err, singlePerson){
        res.json(singlePerson)
    })
  },
  create: function(req, res) {
    var person = new People({name: req.params.name});

    person.save(function(err) {
    // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        }
        res.redirect('/');
    })
  },
  delete: function(req, res) {
    People.remove({name : req.params.name}, function(err){
        res.redirect('/')
    })
  }
}