import "reflect-metadata"
import { DataSource } from "typeorm"
import { Shorturl } from "./entity/Shorturl"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "",
    port: 0,
    username: "",
    password: "",
    database: "shorturl",
    synchronize: false,
    logging: false,
    entities: [Shorturl],
    migrations: [],
    subscribers: [],
})
