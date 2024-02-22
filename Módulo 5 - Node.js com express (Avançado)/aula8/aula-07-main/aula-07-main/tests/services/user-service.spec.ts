import { User } from "../../src/app/models/user"
import { GenericDbInterface } from "../../src/app/ports/outbound/generic-db.interface"
import { UserRepositoryInterface } from "../../src/app/repositories/user-repository.interface"
import { UserRepository } from "../../src/app/repositories/user.repository"
import { UserService } from "../../src/app/services/user.service"


describe("#User-Service", () => {
    let userReq: User
    let userRes: User
    let userService: UserService
    let userRepository: UserRepositoryInterface

    beforeEach(() => {
        userReq = {
            name: "pablo",
            email: "pablords@gmail.com"
        }

        userRes = {
            id: 1,
            name: "pablo",
            email: "pablords@gmail.com",
            createdAt: new Date("2024-02-21"),
            updatedAt: new Date("2024-02-21"),
        }

        const db: GenericDbInterface = {
            create: jest.fn().mockResolvedValueOnce(userRes),
            delete: jest.fn(),
            find: jest.fn().mockResolvedValueOnce([userRes, userRes]),
            findById: jest.fn().mockResolvedValueOnce(userRes),
            update: jest.fn(),
        }

        userRepository = new UserRepository(db)
        userService = new UserService(userRepository)
    })

    test("should be create a user", async () => {
        const userCreated = await userService.createUser(userReq.name, userReq.email)
        expect(userCreated).toEqual(userRes)
    })

    test("should be not create a user without params email and name", async () => {
        expect(async () => {
            await userService.createUser(null, null)
        }).rejects.toThrow(new Error("Error create user"));
    })

    test("should be return a user", async () => {
        const foundUser = await userService.getUserById(1)
        expect(foundUser).toEqual(userRes)
    })

    test("should be not return a user when not found id", async () => {
        jest.spyOn(userRepository, "getUserById").mockResolvedValueOnce(null)
        expect(async () => {
            await userService.getUserById(2)
        }).rejects.toThrow(new Error("id not found"));
    })

    test("should be return all users", async () => {
        const users = await userService.getAllUsers()
        expect(users).toEqual([userRes, userRes])
    })
})