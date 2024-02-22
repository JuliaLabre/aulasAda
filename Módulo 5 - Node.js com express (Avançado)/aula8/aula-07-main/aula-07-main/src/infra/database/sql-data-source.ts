// import "reflect-metadata"
// import { DataSource } from "typeorm";
// import { UserEntity } from "../models/user"


// const connection = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: Number(process.env.DB_PORT),
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     synchronize: true,
//     logging: false,
//     entities: [UserEntity],
//     subscribers: [],
//     migrations: [],
//     connectTimeout: 10000
// })

// connection.initialize().then(async (conn) => {
//     console.log("-----database connection established-----")
// }).catch((error) => {
//     console.log("DB_ERROR", error)
// })
// const sqlManager = connection.manager
// export { sqlManager }