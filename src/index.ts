import { AppDataSource } from "./data-source"
import { Shorturl } from "./entity/Shorturl"
import setup from "./express"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    // const shortUrl = new Shorturl()
    // shortUrl.origin_url = "Timber"
    // shortUrl.random_code = "Saw"
    // await AppDataSource.manager.save(shortUrl)

    // console.log("Loading users from the database...")
    // // const users = await AppDataSource.manager.find(User)
    // // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    setup(AppDataSource, Shorturl)



}).catch(error => console.log(error))
