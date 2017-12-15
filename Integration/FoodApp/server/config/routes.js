var UserController = require('../controllers/users.js');
var FoodController = require('../controllers/foods')

module.exports = function(app){
    app.post('/api/register', function(req, res){
        UserController.register(req, res);
    });
    app.post('/api/login', function(req, res){
        UserController.login(req, res);
    });
    app.get('/api/logout', function(req, res){
        console.log("GOT TO THE LOGOUT ROUTE")
        UserController.logout(req,res);
    })
    app.post('/api/createfood', function(req, res){
        console.log("GOT TO FOOD CREATION ROUTE")
        FoodController.create(req,res);
    });
    app.get(`/api/getallfood`, function(req, res){
        console.log("MADE IT TO GET ALL FOOD ROUTE")
        FoodController.returnAll(req, res)
    })
    app.post(`/api/getsinglefood`, function(req, res){
        console.log("MADE IT TO GET SINGLE FOOD ROUTE")
        FoodController.returnOne(req, res)
    })
    app.post(`/api/updatefood`, function(req, res){
        console.log("MADE IT TO UPDATE FOOD ROUTE")
        FoodController.update(req, res)
    })
    app.post(`/api/deletefood`, function(req, res){
        console.log("MADE IT TO DELETE FOOD ROUTE")
        FoodController.delete(req, res)
    })
}