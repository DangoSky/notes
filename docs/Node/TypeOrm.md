# TypeOrm

## 遇到的问题

- `npm start` 的时候，报错 `Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client`。查资料说是 MySQL8 版本后使用的认证方式，Node 不支持，解决方法为：运行 `alter user 'root'@'localhost' identified with mysql_native_password by <登录密码>` 命令。