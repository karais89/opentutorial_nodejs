var express = require('express');
var app = express();
app.set('views', './views_file');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.get('/topic/new', function(req, res) {
    res.render('new');
});
app.post('/topic', function(req, res) {
    res.send('HI, post');
});
app.listen(3000, function() {
    console.log('Connected, 3000 port!');
});