//引入express框架
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//用户查询
router.get('/login',(req,res)=>{
 var obj=req.query;
 if(!obj.uname){
   res.send('not uname require');
   //阻止往后运行
   return;
 }
 if(!obj.upwd){
   res.send('not upwd require');
   return;
 }
 pool.query('SELECT *FROM xwn_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('1');
	}else{
	   res.sed('0');
	}
 })
});
 //导出路由对象
 module.exports=router;