import "reflect-metadata"
import { DataSource } from "typeorm"
import { Shorturl } from "./entity/Shorturl"
import { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD } from "./loadEnv"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: Number.parseInt(MYSQL_PORT),
    username: MYSQL_USER,
    password: MYSQL_PWD,
    database: "shorturl",
    synchronize: false,
    logging: false,
    entities: [Shorturl],
    migrations: [],
    subscribers: [],
})
