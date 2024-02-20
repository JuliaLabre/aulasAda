
import { User } from '../models/user';
import { UserRepositoryInterface } from '../repositories/user-repository.interface';

import { UserServiceInterface } from './user-repository.interface';

export class UserService implements UserServiceInterface {
    private userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface){
        this.userRepository = userRepository
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers()
    }

    async getUserById(id: number): Promise<User | undefined> {
        if (!id) throw new Error("id not found")
        return await this.userRepository.getUserById(id)
    }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) throw new Error("Error create user")
        return await this.userRepository.createUser(name, email)
    }

    async deleteUser(id: number): Promise<User[]> {
        return await this.userRepository.deleteUser(id)
    }
}

