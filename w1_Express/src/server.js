const express=require('express');
const allRouter=require('./routers/index.js');
//创建服务器
const app=express();
//添加静态资源服务器
app.use(express.static('./'));
app.use(allRouter);
app.listen(1910,()=>{
    console.log('启动成功',1910);
})