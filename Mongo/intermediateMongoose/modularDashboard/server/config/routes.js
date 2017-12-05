var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');

var rabbits = require('../controllers/rabbits.js')

module.exports = function(app){
    // Homepage
    app.get('/', function (req, res) {
        rabbits.show(req, res)
    })

    // Page with form for new user
    app.get('/rabbit/new', function (req, res) {
        res.render('newuser')
    })

    // User profile page
    app.get('/rabbit/:id', function (req, res) {
        rabbits.profile(req, res)
    })

    // Edit profile page
    app.get('/rabbit/edit/:id', function (req, res) {
        rabbits.editpage(req, res)
    })

    // User profile page
    app.get('/rabbit/destroy/:id', function (req, res) {
        rabbits.delete(req, res)
    })

    // Post route for updating user
    app.post('/rabbit/update/:id', function (req, res) {
        rabbits.makeedit(req, res)
    })

    // Post route for creating new user
    app.post('/rabbit/createnew', function (req, res) {
        rabbits.create(req, res)
    })
}