var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {    
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
var fs = require('fs');
var Oriento = require('oriento');
var server = Oriento({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111'
});
var db = server.use('o2');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './views_orientdb');
app.set('view engine', 'jade');
app.get('/upload', function(req, res) {
    res.render('upload');
});
app.post('/upload', upload.single('userfile'), function(req, res) {
    console.log(req.file);
    res.send('Uploaded : ' + req.file.filename);
});
app.get('/topic/add', function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(topics) {
    // fs.readdir('data', function(err, files) {
        if(topics.length == 0) {
            console.log('There is no record');
            res.status(500).send('Internal Server Error');
        }
        res.render('add', {topics:topics});
    });
});
app.post('/topic/add', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = 'INSERT INTO topic (title, description, author) VALUES (:title, :desc, :author)';
    db.query(sql, {
        params:{
            title:title,
            desc:description,
            author:author
        }    
    }).then(function(results) {
        res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
    });
});
app.get(['/topic', '/topic/:id'], function (req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(topics) {
        var sql = 'SELECT FROM topic WHERE @rid=:rid';
        var id = req.params.id;
        if(id) {
            db.query(sql, {params:{rid:id}}).then(function(topic) {
                res.render('view', {topics:topics, topic:topic[0]});
            });
        }else {
            res.render('view', {topics:topics});            
        }
    });
});
app.listen(3000, function() {
    console.log('Connected, 3000 port!');
});