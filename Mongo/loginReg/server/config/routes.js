var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js')

module.exports = function(app){
    // Homepage
    app.get('/', function (req, res) {
        res.render('index')
    })

    app.post('/register', function(req, res){
        users.register(req, res)
    })

    app.post('/login', function(req, res){
        users.login(req, res)
    })

    // Dashboard/Homepage
    app.get('/dashboard', function (req, res) {
        users.show(req, res)
    })
}