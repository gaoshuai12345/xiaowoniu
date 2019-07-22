//引入express框架
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建连接池对象
var router=express.Router();
//创建路由
//用户注册
router.post('/reg',(req,res)=>{
	var obj=req.body;
	for(var key in obj){
		if(!obj[key]){
		res.send({msg:key+'required'});
		return;
		}
	}
	//执行sql语句
	pool.query('insert into xwn_user set?',[obj],(err,result)=>{
		if(err) throw err;
		 if(result.affectedRows>0){
			res.send('1');
		 }else{
			res.send('0');
		  }
		});
});
//用户删除
router.get('/del',(req,res)=>{
	var obj=req.query;
	if(!obj.uid){
		res.send('not required');
		return;
	}
	pool.router('DELETE FROM xz_user WHERE uid=?',[obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
//用户查询
router.get('/login',(req,res)=>{
	var obj=req.query;
	if(!ojb.uname){
		res.send('not uname required');
		return;
	}
	if(!obj.upwd){
		res.send('not upwd required');
		return;
	}
	pool.query('SELECT *FROM xwn_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
//用户修改
router.post('/update',(req,res)=>{
	var obj=req.query;
	for(var key in obj){
		if(!obj[key]){
			res.send(key+'required');
			return;
		}
	}
	pool.query('UPDATE xwn_user SET? uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?',[obj.uname,obj.upwd,obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
//用户列表
router.get('/list',(req,res)=>{
	//获取get请求数据
  var obj=req.query;
  //验证是否为空
  if(!obj.pno) obj.pno=1;
  if(!obj.count) obj.count=3;
  //将传递的值转为整型
  obj.pno=parseInt(obj.pno);
  obj.count=parseInt(obj.count);
  //计算开始查询的值
  var start=(obj.pno-1)*obj.count;
  //执行SQL语句
  pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,obj.count],function(err,result){
    if(err) throw err;
	res.send(result);
  });
});
//导出路由对象
module.exports=router;