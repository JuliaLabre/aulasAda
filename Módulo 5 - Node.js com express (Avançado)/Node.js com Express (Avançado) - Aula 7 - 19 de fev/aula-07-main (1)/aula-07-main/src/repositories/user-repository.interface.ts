import { User } from "../models/user";

export interface UserRepositoryInterface {
    getAllUsers(): Promise<User[]>
    getUserById(id: number): Promise<User | undefined>
    createUser(name: string, email: string): Promise<User>
    deleteUser(id: number): Promise<User[]>
}