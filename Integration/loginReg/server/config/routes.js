var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js')

module.exports = function(app){

    app.post('/api/register', function(req, res){
        console.log("reached register in server routes")
        users.register(req, res)
    })

    app.post('/api/login', function(req, res){
        console.log("reached login route in server routes")
        users.login(req, res)
    })

    // Dashboard/Homepage
    app.get('/api/dashboard', function (req, res) {
        users.show(req, res)
    })
}