var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/template', function (req, res) {
	res.render('temp', {time:Date(), title:'Jade'});
});
app.get('/', function (req, res) {
	res.send('Hello home page');
});
app.get('/dynamic', function (req, res) {
	var lis = '';
	for(var i=0; i < 5; i++) {
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		Hello, Dynamic!
		<ul>
		${lis}
		</ul>
		${time}
	</body>
	</html>`;
	res.send(output);
});
app.get('/route', function (req, res) {
	res.send('Hello Router, <img src="/route.png">')
})
app.get('/login', function (req, res) {
	res.send('<h1>Login please</h1>');
});
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});