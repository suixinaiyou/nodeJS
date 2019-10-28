const http=require('http');
const url=require('url');//用于处理请求地址信息
const path=require('path');//用于处理文件路径信息
const fs=require('fs');
const mime=require('./mime');//自定义模块引入必须是相对路径
// console.log(mime);

http.createServer((request,response)=>{
    // response.writeHead(200,{'Contemt-type':'text/html;charset:utf-8'});
    // url.parse :格式化前端请求地址的方法
    // let obj=url.parse(request.url,true) ;
    // console.log(obj);
    // response.write(JSON.stringify(obj));
    // url.parse()格式化之后的请求地址
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: null,
    //     query: [Object: null prototype] {},
    //     pathname: '/g1.jpsadaadsadaasdad',
    //     path: '/g1.jpsadaadsadaasdad',
    //     href: '/g1.jpsadaadsadaasdad' }
      
    let {pathname}=url.parse(request.url,true);
    // response.write(pathname);
    // // let extname =pathname.match(/\.\w+/)
    let extname=path.extname(pathname).slice(1);
    // console.log(extname);
    
    // response.write(pathname);
    //获取真实路径
    let realpath = path.join(__dirname,pathname)
    console.log(realpath);
    //读取文件内容
    fs.readFile(realpath,(err,data)=>{
        if(err){
        //    return console.log(404);
        response.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
        response.end('文件不存');
            return;
        }
        response.writeHead(200,{'Content-Type':mime[extname]+';charset=utf-8'})
        response.write(data);
        response.end()
        console.log(data);
        
    })
    // response.write('\n');
    // response.write(mime[extname]);
    // console.log(mime[extname]);
    

    // response.end();
}).listen(1910,()=>{
    console.log('服务器启动成功');
    
})