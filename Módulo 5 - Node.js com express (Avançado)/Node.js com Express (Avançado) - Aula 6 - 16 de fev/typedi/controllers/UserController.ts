// import { Request, Response } from "express";
// import { UserService } from "../services/UserService";

// export class UserController {
//     public static async listUsers(req: Request, res: Response) {
//         const users = await UserService.listUsers()
//         res.json(users)
//     }
// }

// import { Request, Response } from "express";
// import { UserService } from "../services/UserService";

// export class UserController {
//     private userService: UserService

//     constructor(userService: UserService) {
//         this.userService = userService
//     }

//     public listUsers = async (req: Request, res: Response) => {
//         const users = await this.userService.listUsers()
//         res.json(users)
//     }
// }

// import { Request, Response } from "express";
// import { UserService } from "../services/contracts/UserService";

// export class UserController {
//     private userService: UserService

//     constructor(userService: UserService) {
//         this.userService = userService
//     }

//     public listUsers = async (req: Request, res: Response) => {
//         const users = await this.userService.listUsers()
//         res.json(users)
//     }
// }

// import { Request, Response } from "express";
// import { UserService } from "../services/contracts/UserService";
// import { Inject, Service } from "typedi";

// @Service()
// export class UserController {
//     @Inject(UserService)
//     private userService: UserService

//     constructor(userService: UserService) {
//         this.userService = userService
//     }

//     public listUsers = async (req: Request, res: Response) => {
//         const users = await this.userService.listUsers()
//         res.json(users)
//     }
// }