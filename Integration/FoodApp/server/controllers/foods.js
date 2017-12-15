var mongoose = require('mongoose');
var Food = mongoose.model('Food')


module.exports = {
    create: function(req, res){
        var newFood = new Food({
            dishName: req.body.dishName,
            description: req.body.description,
            ingredients: req.body.ingredients,
            country: req.body.country,
            nameOfCreator: req.session.currentUser.firstName,
        })

        newFood.save(function(error){
            if(error){
                console.log("--------ERROR IN SAVING FOOD---------")
            } else {
                console.log("----------SUCCESSFULLY SAVED------------")
                console.log(newFood)
                return res.json(newFood)
            }
        })
    },
    returnAll: function(req, res){
        Food.find({}, function(error, allFood){
            console.log("MADE IT TO RETURN ALL FOOD CONTROLLER")
            console.log(allFood)
            return res.json(allFood)
        })
    },
    returnOne: function(req, res){
        console.log(req.body)
        Food.findOne({_id: req.body.id}, function(error, singleFood){
            console.log("MADE IT TO RETURN ONE FOOD CONTROLLER")
            console.log(singleFood)
            return res.json(singleFood)
        })
    },
    update: function(req, res){
        Food.findOneAndUpdate({_id: req.body.foodID}, {
            dishName: req.body.dishName,
            description: req.body.description,
            ingredients: req.body.ingredients,
            country: req.body.country,
        }, {new: true}, function(error, updatedFood){
            console.log("MADE IT TO THE UPDATE FOOD CONTROLLER")
            return res.json(updatedFood)
        })
    },
    delete: function(req, res){
        console.log(req.body)
        Food.remove({_id: req.body.id}, function(error){
            console.log("MADE IT TO THE DELETE CONTROLLER")
            return res.json({'deleted': true})
        })
    }
}