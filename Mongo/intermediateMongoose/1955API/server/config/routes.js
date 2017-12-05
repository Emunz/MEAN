var mongoose = require('mongoose');
var People = mongoose.model('People');

var people = require('../controllers/people.js')

module.exports = function(app){
    // Homepage
    app.get('/', function (req, res) {
        people.show(req, res)
    })

    // Delete person
    app.get('/remove/:name', function (req, res) {
        people.delete(req, res)
    })

    // User profile page
    app.get('/:name', function (req, res) {
        people.profile(req, res)
    })

    // creating new user
    app.get('/new/:name', function (req, res) {
        people.create(req, res)
    })
}