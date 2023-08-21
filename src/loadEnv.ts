const appServerConfig = require("../config")

export const MYSQL_HOST = process.env[appServerConfig.envKeyName_MYSQL_HOST]
export const MYSQL_PORT = process.env[appServerConfig.envKeyName_MYSQL_PORT]
export const MYSQL_USER = process.env[appServerConfig.envKeyName_MYSQL_USER]
export const MYSQL_PWD = process.env[appServerConfig.envKeyName_MYSQL_PWD]