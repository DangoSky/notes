(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{357:function(a,t,s){a.exports=s.p+"assets/img/1.fc2a0c1a.png"},439:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基本使用"}},[a._v("#")]),a._v(" MySQL 基本使用")]),a._v(" "),e("h2",{attrs:{id:"常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[a._v("#")]),a._v(" 常用操作")]),a._v(" "),e("h4",{attrs:{id:"查看数据库状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库状态"}},[a._v("#")]),a._v(" 查看数据库状态")]),a._v(" "),e("p",[e("code",[a._v("service mysqld status")])]),a._v(" "),e("h4",{attrs:{id:"重启数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启数据库"}},[a._v("#")]),a._v(" 重启数据库")]),a._v(" "),e("p",[e("code",[a._v("service mysqld restart")])]),a._v(" "),e("h4",{attrs:{id:"启动数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动数据库"}},[a._v("#")]),a._v(" 启动数据库")]),a._v(" "),e("p",[a._v("在安装 MySQL 目录下 bin 文件夹里运行 "),e("code",[a._v("net stat mysq")]),a._v(" 启动，对应的关闭命令是 "),e("code",[a._v("net stop mysql")]),a._v("。")]),a._v(" "),e("h4",{attrs:{id:"连接-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接-mysql"}},[a._v("#")]),a._v(" 连接 MySQL")]),a._v(" "),e("p",[e("code",[a._v("mysql -h 主机名 -P 端口号 -u 用户名 -p -D 数据库名")])]),a._v(" "),e("p",[a._v("参数说明：")]),a._v(" "),e("ul",[e("li",[a._v("-h：指定客户端所要登录的 MySQL 主机名，登录本机 localhost 或 127.0.0.1 时该参数可以省略。")]),a._v(" "),e("li",[a._v("-P：表示要连接的端口号。")]),a._v(" "),e("li",[a._v("-u：登录的用户名。")]),a._v(" "),e("li",[a._v("-p：表示使用一个密码来登录，如果所要登录的用户名密码为空，可以忽略此选项。")]),a._v(" "),e("li",[a._v("-D：表示要登录进哪个数据库。")])]),a._v(" "),e("p",[a._v("也可以简化成 "),e("code",[a._v("mysql -u 用户名 -p")]),a._v("。")]),a._v(" "),e("p",[a._v("如果提示报 "),e("code",[a._v("command not found: mysql")]),a._v(" 的错误，试试运行 "),e("code",[a._v("source ~/.bash_profile")]),a._v(" 命令再看看。")]),a._v(" "),e("h4",{attrs:{id:"创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[a._v("#")]),a._v(" 创建用户")]),a._v(" "),e("p",[e("code",[a._v("create user 用户名@'主机' identified by '密码'")])]),a._v(" "),e("p",[a._v("注意引号不能省略，如果只是访问本地数据库的话，主机则为 localhost。")]),a._v(" "),e("h4",{attrs:{id:"修改账号密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改账号密码"}},[a._v("#")]),a._v(" 修改账号密码")]),a._v(" "),e("p",[e("code",[a._v("alter user '<用户名>'@'<主机/localhost>' identified by '<新密码>'")])]),a._v(" "),e("h4",{attrs:{id:"查看所有用户列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有用户列表"}},[a._v("#")]),a._v(" 查看所有用户列表")]),a._v(" "),e("p",[a._v("使用 root 账号登录后，"),e("code",[a._v("select user, host from mysql.user")])]),a._v(" "),e("h4",{attrs:{id:"授权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[a._v("#")]),a._v(" 授权")]),a._v(" "),e("p",[e("code",[a._v("grant all privileges on 数据库名.* to '用户名'@'%'")])]),a._v(" "),e("p",[a._v("参数说明：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("all 代表所有权限，也可以具体写成增删改查等权限。")])]),a._v(" "),e("li",[e("p",[a._v("% 代表所有 IP 都能访问，也可以更改为某个 IP 才能访问。")])])]),a._v(" "),e("h4",{attrs:{id:"创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[a._v("#")]),a._v(" 创建数据库")]),a._v(" "),e("p",[e("code",[a._v("create database 数据库名")])]),a._v(" "),e("h4",{attrs:{id:"删除数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[a._v("#")]),a._v(" 删除数据库")]),a._v(" "),e("p",[e("code",[a._v("drop database 数据库名")])]),a._v(" "),e("h4",{attrs:{id:"查看所有的数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有的数据库"}},[a._v("#")]),a._v(" 查看所有的数据库")]),a._v(" "),e("p",[e("code",[a._v("show databases")])]),a._v(" "),e("h4",{attrs:{id:"使用指定的数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用指定的数据库"}},[a._v("#")]),a._v(" 使用指定的数据库")]),a._v(" "),e("p",[e("code",[a._v("use 数据库名")])]),a._v(" "),e("h4",{attrs:{id:"创建表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[a._v("#")]),a._v(" 创建表")]),a._v(" "),e("p",[e("code",[a._v("CREATE TABLE table_name (column_name column_type)")])]),a._v(" "),e("h4",{attrs:{id:"查看所有的数据表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有的数据表"}},[a._v("#")]),a._v(" 查看所有的数据表")]),a._v(" "),e("p",[e("code",[a._v("show tables")])]),a._v(" "),e("h4",{attrs:{id:"删除表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[a._v("#")]),a._v(" 删除表")]),a._v(" "),e("p",[e("code",[a._v("DROP TABLE table_name")])]),a._v(" "),e("h4",{attrs:{id:"修改表名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改表名"}},[a._v("#")]),a._v(" 修改表名")]),a._v(" "),e("p",[e("code",[a._v("alter table 旧表名 rename to 新表名")])]),a._v(" "),e("h4",{attrs:{id:"插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[a._v("#")]),a._v(" 插入数据")]),a._v(" "),e("p",[e("code",[a._v("INSERT INTO table_name (field1, field2,...fieldN) VALUES (value1, value2,...valueN)")])]),a._v(" "),e("h4",{attrs:{id:"查询数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[a._v("#")]),a._v(" 查询数据")]),a._v(" "),e("p",[e("code",[a._v("SELECT * FROM table_name [WHERE Clause] [OFFSET M] [LIMIT N]")])]),a._v(" "),e("p",[a._v("参数说明：")]),a._v(" "),e("ul",[e("li",[a._v("使用 * 来代替列名，SELECT 语句会返回表的所有字段数据。")]),a._v(" "),e("li",[a._v("使用 WHERE 语句来指定筛选条件。")]),a._v(" "),e("li",[a._v("使用 OFFSET 指定 SELECT 语句开始查询的数据偏移量，默认情况下偏移量为 0，通常用于列表分页查找。")]),a._v(" "),e("li",[a._v("使用 LIMIT 指定返回的数据总量。如果只传了一个参数 "),e("code",[a._v("LIMIT n")]),a._v("，则相当于是 "),e("code",[a._v("LIMIT 0 n")]),a._v("。")])]),a._v(" "),e("h4",{attrs:{id:"修改数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改数据"}},[a._v("#")]),a._v(" 修改数据")]),a._v(" "),e("p",[e("code",[a._v("UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]")])]),a._v(" "),e("h4",{attrs:{id:"删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[a._v("#")]),a._v(" 删除数据")]),a._v(" "),e("p",[e("code",[a._v("DELETE FROM table_name [WHERE Clause]")])]),a._v(" "),e("h4",{attrs:{id:"所有数据表所有的列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所有数据表所有的列"}},[a._v("#")]),a._v(" 所有数据表所有的列")]),a._v(" "),e("ol",[e("li",[e("p",[e("code",[a._v("show columns from 数据表名")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("describe 数据表名")]),a._v(" 或 "),e("code",[a._v("desc 数据表名")])])])]),a._v(" "),e("h4",{attrs:{id:"增加列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加列"}},[a._v("#")]),a._v(" 增加列")]),a._v(" "),e("p",[e("code",[a._v("alter table <表名> add column <列名> varchar(30)")])]),a._v(" "),e("p",[a._v("设置默认值:")]),a._v(" "),e("p",[e("code",[a._v("alter table <表名> add column <列名> varchar(30) not null default ''")])]),a._v(" "),e("h4",{attrs:{id:"删除列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除列"}},[a._v("#")]),a._v(" 删除列")]),a._v(" "),e("p",[e("code",[a._v("alter table 表名 drop column 列名")])]),a._v(" "),e("h4",{attrs:{id:"导入数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库"}},[a._v("#")]),a._v(" 导入数据库")]),a._v(" "),e("p",[e("code",[a._v("source sql文件路径")])]),a._v(" "),e("p",[a._v("注意点：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("要导入的 sql 文件路径不能用 "),e("code",[a._v("\\")]),a._v("，得用 "),e("code",[a._v("/")]),a._v("。")])]),a._v(" "),e("li",[e("p",[a._v("导入过程如果报 "),e("code",[a._v("source unknown command \\\\")]),a._v(" 错误，可能是编码问题，解决方法是，在登录数据库时就指定编码为 utf-8，"),e("code",[a._v("mysql -u 用户名 -p --default-character-set=utf8")])])])]),a._v(" "),e("h4",{attrs:{id:"内连接-等值连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内连接-等值连接"}},[a._v("#")]),a._v(" 内连接/等值连接")]),a._v(" "),e("p",[a._v("获取两个表中指定字段相匹配的记录。相当于取两个表中指定字段的交集。")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_count\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" runoob_tbl a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INNER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" tcount_tbl b\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author\n")])])]),e("p",[a._v("等价于 "),e("code",[a._v("SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author")])]),a._v(" "),e("h4",{attrs:{id:"左连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#左连接"}},[a._v("#")]),a._v(" 左连接")]),a._v(" "),e("p",[a._v("除了获取等值连接的数据外，还会获取所有左数据表的数据。如果右数据表没有和它匹配的对应数据项（即不等值），则该数据项仍会获取到，但对应字段值会为 null。")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_count\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" runoob_tbl a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("LEFT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" tcount_tbl b\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author\n")])])]),e("h4",{attrs:{id:"右连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#右连接"}},[a._v("#")]),a._v(" 右连接")]),a._v(" "),e("p",[a._v("除了获取等值连接的数据外，还会获取所有右数据表的数据，即使在左数据表中没有和它匹配的对应数据。")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_count\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" runoob_tbl a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RIGHT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" tcount_tbl b\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("runoob_author"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[e("img",{attrs:{src:s(357),alt:""}})]),a._v(" "),e("h2",{attrs:{id:"子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子句"}},[a._v("#")]),a._v(" 子句")]),a._v(" "),e("h4",{attrs:{id:"where-子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where-子句"}},[a._v("#")]),a._v(" where 子句")]),a._v(" "),e("ul",[e("li",[a._v("WHERE 子句的字符串比较默认是不区分大小写的，可以使用 "),e("strong",[a._v("BINARY")]),a._v(" 关键字来使其区分大小写。"),e("code",[a._v("SELECT * from table_name WHERE BINARY column_name='xxx'")])])]),a._v(" "),e("h4",{attrs:{id:"like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[a._v("#")]),a._v(" like")]),a._v(" "),e("p",[a._v("LIKE 通常与 % 一同使用，相当于查找包含某个子串的值。如下例相当于查找值中包含有 com 这个子串的 field 字段。")]),a._v(" "),e("p",[e("code",[a._v("SELECT field FROM table_name WHERE field LIKE '%com'")])]),a._v(" "),e("p",[a._v("或者也可以使用正则表达式来指定匹配条件。")]),a._v(" "),e("p",[e("code",[a._v("SELECT field FROM table_name WHERE field REGEXP 'com$'")])]),a._v(" "),e("h4",{attrs:{id:"order-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[a._v("#")]),a._v(" ORDER BY")]),a._v(" "),e("p",[a._v("根据指定的字段按升序或降序排列好后再返回结果，默认是升序 ASC。")]),a._v(" "),e("p",[e("code",[a._v("SELECT field1, field2 FROM table_name1, table_name2 ORDER BY field1 ASC [DESC]")])]),a._v(" "),e("h4",{attrs:{id:"not-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#not-in"}},[a._v("#")]),a._v(" not in")]),a._v(" "),e("p",[a._v("选择不再某个表里出现过的字段。")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" Name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" A \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" Id "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("not")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("in")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" Id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" B\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h2",{attrs:{id:"操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[a._v("#")]),a._v(" 操作符")]),a._v(" "),e("h4",{attrs:{id:"union"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#union"}},[a._v("#")]),a._v(" union")]),a._v(" "),e("p",[a._v("连接两个及以上的 SELECT 语句的结果组合到一个结果集合中。使用 DISTINCT 时会删除重复的数据（默认），使用 ALL 则会保留重复数据。")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" expression1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("tables")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" conditions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNION")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTINCT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" expression2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("tables")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" conditions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("h4",{attrs:{id:"distinct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#distinct"}},[a._v("#")]),a._v(" distinct")]),a._v(" "),e("p",[a._v("用于对选择出来的数据进行去重。")]),a._v(" "),e("p",[e("code",[a._v("select distinct name from Person")])]),a._v(" "),e("h4",{attrs:{id:"alert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alert"}},[a._v("#")]),a._v(" alert")]),a._v(" "),e("p",[a._v("用于修改数据表名或者修改数据表字段。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("删除列。"),e("code",[a._v("ALTER TABLE table_name DROP field")])])]),a._v(" "),e("li",[e("p",[a._v("新增列。"),e("code",[a._v("ALTER TABLE table_name ADD field INT")])])]),a._v(" "),e("li",[e("p",[a._v("修改字段类型。"),e("code",[a._v("ALTER TABLE table_name MODIFY field CHAR(10)")])])])]),a._v(" "),e("p",[a._v("或 "),e("code",[a._v("ALTER TABLE table_name CHANGE field newFieldName INT")])]),a._v(" "),e("h2",{attrs:{id:"null"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[a._v("#")]),a._v(" Null")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("无法直接使用 = 或 !=  来查找 Null 值，需要使用 "),e("code",[a._v("IS NULL")]),a._v(" 或 "),e("code",[a._v("IS NOT NULL")]),a._v("。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("<=>")]),a._v(" 表示比较的两个值都为 Null 或相等时返回 true。")])]),a._v(" "),e("li",[e("p",[a._v("NULL 值与任何其它值的比较（即使是 NULL）永远返回 NULL，即 NULL = NULL 返回 NULL 。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);