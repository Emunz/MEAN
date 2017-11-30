var express = require("express");

var path = require("path");
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    if(!req.session.number) {
        req.session.number = Math.floor(Math.random() * 100) + 1;
        correctNumber = req.session.number
    }
    console.log(correctNumber)
    var context = {
        correctNumber : correctNumber,
        guessNumber : req.session.guess
    }
    res.render("index", context);
})

app.post('/guess', function (req, res) {
    req.session.guess = req.body.guess
    res.redirect('/');
})

app.get('/reset', function (req, res) {
    req.session.destroy()
    res.redirect("/");
})

app.listen(5000, function () {
    console.log("listening on port 5000");
});