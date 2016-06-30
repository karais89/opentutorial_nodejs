var Oriento = require('oriento');

var server = Oriento({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111'
});
var db = server.use('o2');
/*
db.record.get('#22:0').then(function (record) {
  console.log('Loaded record:', record);
});
*/

// CREATE
/*
var sql = 'SELECT FROM topic';
db.query(sql).then(function (results) {
    console.log(results);
});

var sql = 'SELECT FROM topic WHERE @rid=:id';
var params = {
    params : {
        id: '#22:0'
    }
};
db.query(sql, params).then(function (results) {
    console.log(results);
});
*/