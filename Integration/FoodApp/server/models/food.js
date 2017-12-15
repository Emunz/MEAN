var mongoose = require('mongoose')

var FoodSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 70,
        trim: true
    },
    ingredients: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    country: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 40,
        trim: true
    },
    nameOfCreator: {
        type: String,
        trim: true
    }
}, {timestamps: true})

mongoose.model('Food', FoodSchema);
var Food = mongoose.model('Food');