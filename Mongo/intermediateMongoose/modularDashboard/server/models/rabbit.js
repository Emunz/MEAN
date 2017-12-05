var mongoose = require('mongoose')

var RabbitSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true},
    age: {type: Number, min: 1, max: 150, required: true},
    hometown: {type: String, minlength: 2, required: true},
    favoriteFood: {type: String, minlength: 3, required: true}
})

var Rabbit = mongoose.model('Rabbit', RabbitSchema);