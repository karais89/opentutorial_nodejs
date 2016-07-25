var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './views/mysql');
app.set('view engine', 'jade');

var topic = require('./routes/mysql/topic')();
app.use('/topic', topic);

app.listen(3000, function() {
    console.log('Connected, 3000 port!');
});