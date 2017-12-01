var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})
mongoose.Promise = global.Promise;
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

app.get('/', function (req, res) {
    
    res.render('index');
})

// Add User Request 
app.post('/addquote', function (req, res) {
    console.log("POST DATA", req.body);

    var quote = new Quote({name: req.body.name, quote: req.body.quote});

    quote.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a quote!');
        res.redirect('/quotes');
        }
    })
})

app.get('/quotes', function (req, res) {
    Quote.find({}, function(error, quotes){
        
    res.render('quotes', {quotes: quotes})
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})