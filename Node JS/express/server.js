//引入第三方模块
const express=require('express');
//引入文件模块
const {PORT}=require('./config.json')
//利用express创建server服务器
let app = express();
app.use(express.static('./',{maxAge:10*1000}))

//自定义中间件
//  let myMiddleware = function(req,res){
//     res.send('hello')
// }
// app.use(myMiddleware);

app.use((req,res,next)=>{
   console.log("laoxie");
   res.send("laoxie");
   next();
});
app.use((req,res,next)=>{
        console.log('dingding');
        // res.send('dingding')
        // next();
        
})
app.listen(PORT,()=>{
        console.log(PORT);

})