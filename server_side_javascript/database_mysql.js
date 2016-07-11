// DB 정보는 실제로는 별도의 파일로 빼고.. 다른 사람과 공유한다던지.. 등을 빼서.. 해야됨
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
conn.connect();
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });
var sql = 'SELECT * FROM topic';
conn.query(sql, function(err, rows, fields) {
    if(err) {
        console.log(err);
    }else {
        console.log('rows', rows);
        console.log('fiels', fields);
    }
});
conn.end();