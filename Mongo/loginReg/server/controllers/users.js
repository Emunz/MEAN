var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

module.exports = {
  show: function (req, res) {
    User.find({}, function (error, users) {
      res.render('dashboard', {users: users})
    })
  },
  register: function (req, res, err) {
    if (err) {
      console.log("error");
      res.json({'errors': err.errors})
    } else {
      var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        password: req.body.password,
      });
      if (req.body.password === req.body.confirmPassword) {
        newUser.save(function (err) {
          if (err) {
            console.log("something went wrong");
            console.log(err.errors);
            res.json({'errors': err.errors})
          } else {

            // req.session.currentUser = newUser;
            res.redirect('/dashboard');
          }
        });
      } else {
        res.redirect('/', {errors: "Please make sure the passwords match"});
      }
    }
  },
  login: function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
      
      if (err) {
        console.log(err);
        res.json({'errors': err.errors})
      } else {
        if (user.email === req.body.email) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            // req.session.currentUser = user._id;
            res.json({'errors': err.errors})
          } else {
            res.redirect('/', {errors: "The password did not match"});
          }
        } else {
          console.log("user not logged, field empty");
          res.redirect('/', {errors: "The email is not registerd"});
        }
      }
    });
  }
}