var mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    firstName: {type: String, 
        minlength: [2, "First Name must be at least 2 letters"], 
        required: [true, "First Name is required"],
        trim: true},
    lastName: {type: String, 
        minlength: [2, "Last Name must be at least 2 letters"], 
        required: [true, "Last Name is required"],
        trim: true},
    birthday: {type: Date, required: [true, "Birthday is required"]},
    email: {
        type: String, 
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);//returns true or false
              },
            message: 'Must be a valid email!'
        }
    },
    password: {
        type: String, 
        minlength: [8, "Password must be at least 8 characters"], 
        maxlength: [32, "Password cannot be longer than 32 characters"], 
        required: [true, "Password is required"]
    }
}, { timestamps: true }); 


UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then(hashed_password => {
        this.password = hashed_password;
        next() 
    }).catch(error => { 
        next()
    }); 
})

var User = mongoose.model('User', UserSchema);