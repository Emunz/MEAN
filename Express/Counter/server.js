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
    var count;
    if(!req.session.count) {
        req.session.count = 1;
        count = req.session.count
    } else {
        req.session.count += 1;
        count = req.session.count
    }
    console.log(count)
    res.render("index", {count: count});
})

app.get('/addtwo', function (req, res) {
    req.session.count += 1;
    count = req.session.count
    res.redirect("/");
});

app.get('/reset', function (req, res) {
    req.session.destroy()
    res.redirect("/");
});

// app.post('/users', function (req, res) {
//     console.log("POST DATA", req.body);


//     res.redirect('/');
// })

app.listen(8000, function () {
    console.log("listening on port 8000");
});