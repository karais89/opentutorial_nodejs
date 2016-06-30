var Oriento = require('oriento');

var server = Oriento({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111'
});
var db = server.use('o2');
db.record.get('#22:0').then(function (record) {
  console.log('Loaded record:', record);
});