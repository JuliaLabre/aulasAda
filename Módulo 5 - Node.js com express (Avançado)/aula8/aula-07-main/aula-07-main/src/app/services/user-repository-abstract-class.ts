import { User } from "../models/user"
import { UserRepositoryAbstract } from '../repositories/user-repository.interface';

export abstract class UserServiceAbstract{
    protected userRepository: UserRepositoryAbstract
    constructor(userRepository: UserRepositoryAbstract){
        this.userRepository = userRepository
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers()
    }

    async getUserById(id: number): Promise<User | undefined> {
        const foundId = await this.userRepository.getUserById(id)
        if (!foundId) throw new Error("id not found")
        return foundId
    }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) throw new Error("Error create user")
        return await this.userRepository.createUser(name, email)
    }

    async deleteUser(id: number): Promise<User[]> {
        return await this.userRepository.deleteUser(id)
    }
}