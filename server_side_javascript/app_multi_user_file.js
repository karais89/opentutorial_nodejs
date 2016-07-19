var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var bodyParser = require('body-parser');
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'qgqhgdgwhregsg1234',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
app.get('/count', function(req, res) {
    if(req.session.count) {
        req.session.count++;
    }else {
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);
});
var users = [
    {
        username:'egoing',
        password:'Xa91Q+CEiTIfYMi79r6u/747LPCaEWuEhJIT1pDtEk/jUwORbZQJjoS7M+haevryym92UX4IP+hzS+ifIYbi3+w0h+tQC3SV+N+26uRnGzemkbTTJOZmNPohntYtkL0m/u99+ApysDVOXlHIo8MD9cUYtf3eawicBIWeSP+nIIg=',
        salt:'1waYPxoH4MIU4qYFGFEmUM0Hd6NOhE2njR52PNAdmzbnYHU6K/pOwDpSsHu+x4CHjl8tWngurRMl3NVfkZQXFA==',
        displayName:'Egoing'
    }
];
app.post('/auth/register', function(req, res) {
    var user = {
        username:req.body.username,
        password:req.body.password,
        displayName:req.body.displayName        
    };
    users.push(user);
    req.session.displayName = req.body.displayName;
    req.session.save(function() {      
        res.redirect('/welcome');      
    })
});
app.get('/auth/register', function(req, res) {
    var output = `
    <h1>Register</h1>
    <form action='/auth/register' method='post'>
        <p>
            <input type="text" name="username" placeholder="username">       
        </p>
        <p>
            <input type="password" name="password" placeholder="password">
        </p>
        <p>
            <input type="text" name="displayName" placeholder="displayName">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>
    `
    res.send(output);
});
app.get('/auth/logout', function(req, res) {
    delete req.session.displayName;
    res.redirect('/welcome');
});
app.get('/welcome', function(req, res) {
    if(req.session.displayName) {
        res.send(`
            <h1>Hello, ${req.session.displayName} </h1>
            <a href="/auth/logout">logout</a>
        `);        
    }else {
        res.send(`
            <h1>Welcome</h1>
            <ul>
                <li><a href='/auth/login'>Login</a></li>
                <li><a href='/auth/register'>Register</a></li>            
            </ul>
        `);
    }
});
app.post('/auth/login', function(req, res) {
    var uname = req.body.username;
    var pwd = req.body.password;
    for(var i=0; i<users.length; i++) {
        var user = users[i];
        if(uname == user.username && sha256(pwd+user.salt) == user.password) {
            req.session.displayName = user.displayName;
            return req.session.save(function() {
                res.redirect('/welcome');        
            });
        }
    }    
    res.send('Who are you? <a href="/auth/login">login</a>');            
});
app.get('/auth/login', function(req, res) {
    var output = `
    <h1> Login </h1>
    <form action="/auth/login" method="post">
        <p>
            <input type="text" name="username" placeholder="username">       
        </p>
        <p>
            <input type="password" name="password" placeholder="password">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>
    `;    
    res.send(output);
});
app.listen(3003, function() {
    console.log('Connected 3003 port !!!');
});