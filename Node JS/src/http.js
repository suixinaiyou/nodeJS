let http = require('http');

// console.log(http);
console.log(554);


let app=http.createServer(function(require,response){
      response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('老李fsdfs ');
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('<h1>hello 老谢，</h1> hello dingding');
    response.end();
})

app.listen(1910,function(){
    console.log("服务器启动成功");
    
})