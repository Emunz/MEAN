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
    
    res.render("index");
})


app.post('/adduser', function (req, res) {
    req.session.name = req.body.name
    req.session.location = req.body.location
    req.session.language = req.body.language
    req.session.comment = req.body.comment
    res.redirect("/success");
});

app.get('/success', function (req, res) {
    var context = {
        name : req.session.name,
        location : req.session.location,
        language : req.session.language,
        comment : req.session.comment
    }
    res.render("success", context);
});

// app.post('/users', function (req, res) {
//     console.log("POST DATA", req.body);


//     res.redirect('/');
// })

app.listen(6789, function () {
    console.log("listening on port 6789");
});