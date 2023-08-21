# 快速开始

1.目录结构

--sql <br>
&nbsp;&nbsp;&nbsp;&nbsp;--db.sql  SQL文件<br>
--config.json 配置文件

    frontendAccessBaseUrl  前端访问短地址的前缀
    expressListenPort express服务器监听端口
    envKeyName_MYSQL_HOST 自定义环境变量名称 默认:MYSQL_HOST
    envKeyName_MYSQL_PORT 自定义环境变量名称 默认:MYSQL_PORT
    envKeyName_MYSQL_USER 自定义环境变量名称 默认:MYSQL_USER
    envKeyName_MYSQL_PWD 自定义环境变量名称 默认:MYSQL_PWD


2. 部署<br>
 新建数据库shorturl, 将db.sql文件导入数据库 <br>
 配置config.json内容，在系统中新建环境变量配置数据库信息(环境变量key可自定义)

3. 运行<br>
yarn start
