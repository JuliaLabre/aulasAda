import { MemoryDb } from "../../infra/database/memory-db"
import { SqlDbAdapter } from "../../infra/adapters/outbound/sql-db-adapter"
//import { sqlManager } from "../../infra/database/sql-data-source"
import { UserRepository } from "../repositories/user.repository"
import { UserService } from "../services/user.service"
import { UserController } from "../controllers/user.controller"
import { User } from "../models/user"
import { UserEntity } from "../../infra/models/user"


const userTable: User[] = []
const memoryDb = new MemoryDb(userTable)

//const sqlDbAdapter = new SqlDbAdapter<UserEntity>(sqlManager, UserEntity)

const UuerRepository = new UserRepository(memoryDb)
const userService = new UserService(UuerRepository)
const userController = new UserController(userService)

export {
    userController
}