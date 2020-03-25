var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456abc',
  database : '1906api'
});
 
connection.connect((err)=>{
    if(err) throw err;
    console.log('连接成功');
});
 
connection.query('select * from p_users', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();