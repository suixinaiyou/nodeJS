const express=require('express');

const Router=express.Router();

// 引入数据库操作方式
const query=require('../db/mysql');
//引入数据库
// const mysql = require('mysql');


// //方法一：连接对象操作数据库
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'denglu'
// });
// connection.connect();
// 方法二：连接池操作数据库
// var pool  = mysql.createPool({
//     // connectionLimit : 5,
//     host            : 'localhost',
//     user            : 'root',
//     password        : '',
//     database        : 'denglu',
//     multipleStatements: true,//是否运行同时连接多个连接对象 
//   });


//JsonP接口
// Router.get('/jsonP',async(req,res)=>{
//     let {callback}=req.query;
//     let sql=`select * from denglulist`;
//     let data =await query(sql);
//     res.send(`getDate${JSON.stringify(data)} data}`)
// })
//获取所有商品
Router.get('/',async(req,res)=>{ 
    let sql = `select * from denglulist`;
    // connection.connect();
    // connection.query(sql, (error, results, fields)=> {
    //     if (error) throw error;
    //     console.log(results);
    //     res.send(results);
    //     // connection.end();
    //   });
    // 方法二
    // pool.query(sql, function (error, results, fields) {
    //   if (error) throw error;
    //   console.log(results);
    //   res.send(results);
    // });
  // 回调方式
    // query(sql,function(results){
    //   console.log(results);
    //   res.send(results);
    // })
    // query(sql).then((results)=>{
    //   res.send(results)
    // })

    let data=await query(sql);
    console.log(data);
    
    res.send(data);
})  


// 添加商品
Router.post('/',async (req,res)=>{
    // let {id,name,password}=req.body;
    // let sql=`insert into denglulist(id,name,password) values("${id}","${name}","${password}")`;
    let sql = `insert into denglulist(`
    for(var key in req.body){
        sql +=`${key},`
    }
    sql=sql.replace(/,$/,") values(") ;
    for(var key in req.body){
        sql += `"${req.body[key]}",`
    }
    sql =sql.replace(/,$/,")") ;
    console.log(req.body);
    
    // query(sql,function(results){
    //   console.log(results);
    //   res.send(results);
    // })

    let data = await query(sql)
    res.send(`${data}添加成功`);
})
// 获取单个商品
Router.get('/:id',async(req,res)=>{
   
    let{id}=req.params;
    let sql=`select * from denglulist where id=${id}`
    // 方法一
    // connection.connect();
    // connection.query(sql, (error, results, fields)=> {
    //     if (error) throw error;
    //     console.log(results);
    //     res.send(results)
    //     connection.end();
    //   });
    
    // 方法二：
    // pool.query(sql, function (error, results, fields) {
    //   if (error) throw error;
    //   console.log(results);
    //   res.send(results);
    // });
    // 回调方式
    // query(sql,function(results){
    //   console.log(results);
    //   res.send(results);
    // })
    // promise方式
    // query(sql).then((results)=>{
    //   res.send(results)
    // })
      /*
       ES7async和await
          1、await必须在async组合使用
          2、await用于等待promise对象返回的结果
          3、让我们已同步的代码实现异步编程
      */
     let data=await query(sql);
     console.log(data);
     
     res.send(data)
   
})


Router.delete('/:id',async (req,res)=>{
    let {id}=req.params;
    let sql = `delete from denglulist where id=${id}`
    let results= await query(sql)
    res.send(`${results}删除成功`)
})
Router.patch('/:id',async (req,res)=>{
    let {id}=req.params;
    // let {name,password}=req.body;
    // let sql=`update denglulist set name="${name}",password="${password}" where id=${id}`
    let sql=`update denglulist set `
    for(var key in req.body){
        sql +=`${key}="${req.body[key]}",`
    }
    sql=sql.slice(0,-1);
    sql += ` where id="${id}"`;
    console.log(sql);
    let data=await query(sql);
    res.send(data)
})
module.exports=Router;