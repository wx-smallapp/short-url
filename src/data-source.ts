import "reflect-metadata"
import { DataSource } from "typeorm"
import { Shorturl } from "./entity/Shorturl"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "bj-cynosdbmysql-grp-h3yb8fr0.sql.tencentcdb.com",
    port: 24967,
    username: "root",
    password: "Xu07247857.",
    database: "shorturl",
    synchronize: false,
    logging: false,
    entities: [Shorturl],
    migrations: [],
    subscribers: [],
})
