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

mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name : { type: String, required: true }, 
    text: { type: String, required: true }, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message')

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name : { type: String, required: true }, 
    text: { type: String, required: true },
   }, {timestamps: true });

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')

// The Message Board Homepage
app.get('/', function (req, res) {
    Message.find({})
    .populate('comments')
    .exec(function(err, messages) {
        if(err) {
            console.log('something went wrong');
        } 
        res.render('index', {messages: messages})
    });
})

// Create Message
app.post('/newmessage', function (req, res) {

    var message = new Message({name: req.body.name, text: req.body.text});

    message.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a quote!');
        res.redirect('/');
        }
    })
})

// Create Comment
app.post('/newcomment/:id', function (req, res) {
    Message.findOne({_id: req.params.id}, function(err, message){
       
        var comment = new Comment({name: req.body.commentname, text: req.body.commenttext});
        
        comment._message = message._id;
        
        comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
                if(err) {
                    console.log('Error');
                } else {
                    console.log("Createcomment url, this is the new comment:")
                    console.log(comment)
                    res.redirect('/');
                }
            });
        });
    });
})



app.listen(8000, function () {
    console.log("listening on port 8000");
})