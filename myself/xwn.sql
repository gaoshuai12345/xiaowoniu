SET NAMES utf8;
DROP DATABASE IF EXISTS xwn;
CREATE DATABASE xwn CHARSET=utf8;
USE xwn;
/**用户信息**/
CREATE TABLE xwn_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),#头像图片路径
  user_name VARCHAR(32),#用户名，如张三
  gender INT#性别0-女 1-男
);
INSERT INTO xwn_user VALUES (NULL, '小蜗牛', '123456', 'xiaowoniu@163.com', '18546665825', NULL, '蜗牛', '0');
INSERT INTO xwn_user VALUES (NULL, '浅唱', '123456', 'qian@163.com', '18546665825', NULL, '浅唱', '1');
INSERT INTO xwn_user VALUES (NULL, '唐宋元明', '123456', 'tang@163.com', '18546665825', NULL, '唐宋', '1');
INSERT INTO xwn_user VALUES (NULL, '吴杰', '123456', 'wu@163.com', '18546665825', NULL, '吴杰', '1');
INSERT INTO xwn_user VALUES (NULL, '鹏飞', '123456', 'peng@163.com', '18546665825', NULL, '鹏飞', '1');
INSERT INTO xwn_user VALUES (NULL, '潘伟航', '123456', 'pan@163.com', '18546665825', NULL, '潘伟航', '1');
INSERT INTO xwn_user VALUES (NULL, '闫哲', '123456', 'yan@163.com', '18546665825', NULL, '闫哲', '0');
INSERT INTO xwn_user VALUES (NULL, '徐哲', '123456', 'xu@163.com', '18546665825', NULL, '徐哲', '0');
INSERT INTO xwn_user VALUES (NULL, '王菲', '123456', 'wang@163.com', '18546665825', NULL, '王菲', '0');
INSERT INTO xwn_user VALUES (NULL, '周小雅', '123456', 'zhou@163.com', '18546665825', NULL, '周小雅', '0');