# MySQL 基本使用

## 语法

### 常用操作

#### 连接 MySQL

`mysql -h 主机名 -u 用户名 -p`

参数说明：

- -h：指定客户端所要登录的 MySQL 主机名，登录本机 localhost 或 127.0.0.1 时该参数可以省略。
- -u：登录的用户名。
- -p：告诉服务器将会使用一个密码来登录，如果所要登录的用户名密码为空，可以忽略此选项。


#### 创建表

`CREATE TABLE table_name (column_name column_type)`

#### 删除表

`DROP TABLE table_name`

#### 插入数据

`INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN )`

#### 查询数据

`SELECT column_name, column_name FROM table_name [WHERE Clause] [LIMIT N] [ OFFSET M]`

参数说明：

- 使用 * 来代替列名，SELECT 语句会返回表的所有字段数据。
- 使用 WHERE 语句来指定筛选条件。
- 使用 LIMIT 属性来设定返回的记录数。
- 使用 OFFSET 指定 SELECT 语句开始查询的数据偏移量，默认情况下偏移量为 0。

#### 修改数据

`UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]`

#### 删除数据

`DELETE FROM table_name [WHERE Clause]`

#### 内连接/等值连接

获取两个表中指定字段相匹配的记录。相当于取两个表中指定字段的交集。

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count
FROM runoob_tbl a INNER JOIN tcount_tbl b
ON a.runoob_author = b.runoob_author
```

等价于 `SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author`

#### 左连接

除了获取等值连接的数据外，还会获取所有左数据表的数据，即使在右数据表中没有和它匹配的对应数据。

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count
FROM runoob_tbl a LEFT JOIN tcount_tbl b
ON a.runoob_author = b.runoob_author
```

#### 右连接

除了获取等值连接的数据外，还会获取所有右数据表的数据，即使在左数据表中没有和它匹配的对应数据。

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count
FROM runoob_tbl a RIGHT JOIN tcount_tbl b
ON a.runoob_author = b.runoob_author;
```


### 子句

#### where 子句

- WHERE 子句的字符串比较默认是不区分大小写的，可以使用 **BINARY** 关键字来使其区分大小写。`SELECT * from table_name WHERE BINARY column_name='xxx'`

#### like 子句

LIKE 通常与 % 一同使用，相当于查找包含某个子串的值。如下例相当于查找值中包含有 com 这个子串的 field 字段。

`SELECT field FROM table_name WHERE field LIKE '%com'`

#### ORDER BY 子句

根据指定的字段按升序或降序排列好后再返回结果，默认是升序 ASC。

`SELECT field1, field2 FROM table_name1, table_name2 ORDER BY field1 ASC [DESC]`

### 操作符

#### union 操作符

连接两个及以上的 SELECT 语句的结果组合到一个结果集合中。使用 DISTINCT 时会删除重复的数据（默认），使用 ALL 则会保留重复数据。

```sql
SELECT expression1 FROM tables [WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression2 FROM tables [WHERE conditions]
```