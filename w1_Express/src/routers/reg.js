const express=require('express');

const Router=express.Router();

Router.get('/',(req,res)=>{
    res.send('登录成功reg');
})
module.exports=Router;