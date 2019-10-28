const mysql = require('mysql');

// // 1.利用连接对象实现数据库操作
// // 配置连接信息
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });
//方法二：连接池操作数据库
var pool  = mysql.createPool({
    // connectionLimit : 5,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'denglu',
    multipleStatements: true,//是否运行同时连接多个连接对象 
  });
  //回调的方式
  // module.exports=function(sql,callback){
  //   pool.query(sql, (error, results)=> {
  //           // if (error) throw error;
  //           // res.send(results);
  //           callback(results);
  //         });
  // }

  //Promise
  module.exports=function(sql){
      let pro=new Promise(function(resovle,reject){
        pool.query(sql, (error, results)=> {
          if(error){
            reject(error);
          }
          resovle(results)
        })
      })
      return pro;
  }

  //async和await
