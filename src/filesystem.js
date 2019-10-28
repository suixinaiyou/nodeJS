const fs = require('fs');
fs.readFile('g1.jpg',(err,data)=>{
    if(err){
        return console.log('读取文件失败')
    }
    // console.log(data.toString());
    
})
fs.writeFile('tda.text','dsadadad',(err,data)=>{
    if(err){
        return console.log('写入文件失败');
    }
    console.log('写入成功');
    
    
})