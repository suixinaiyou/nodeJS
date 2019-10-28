const express=require('express');

let Router=express.Router();
// console.log("router",Router);
let loginRouter=require('./login');
let goodsRouter=require('./goods');
// let userRouter=require('./user');
// let regRouter=require('./reg');
Router.use(express.json(),express.urlencoded());
Router.use('/login',loginRouter);
Router.use('/goods',goodsRouter);
// Router.use('/login',userRouter);
// Router.use('/login',regRouter);




//暴露一个中间件
module.exports=Router;


