//引入express框架
const express=require('express');
//引入路由
//const userRouter=require('./routers/user.js');
const loginRouter=require('./routers/login.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//const cors=require('cors');
//创建服务器
var server=express();
server.listen(8080);
//托管静态资源到public下
server.use(express.static('public'));
//使用body-parser中间件，将post请求的数据格式化为对象
server.use(bodyParser.urlencoded({
	//不使用扩展的qs模块，使用querystring模块格式会为对象
	extended:false
}));
//使用路由器
//使用（挂载）的url:/user
///server.use('/user',userRouter);
server.use('/login',loginRouter);