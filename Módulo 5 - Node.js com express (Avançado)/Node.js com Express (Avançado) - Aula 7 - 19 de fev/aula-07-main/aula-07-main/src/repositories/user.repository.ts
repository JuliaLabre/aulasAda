import { GenericDbInterface } from "../infra/database/generic-db.interface";
import { User } from "../models/user";
import { UserRepositoryInterface } from "./user-repository.interface";


export class UserRepository implements UserRepositoryInterface {
    private db: GenericDbInterface
    
    constructor(db: GenericDbInterface) {
        this.db = db
    }

    getAllUsers(): Promise<User[]> {
        return this.db.find()
    }

    createUser(name: string, email: string): Promise<User> {
        return this.db.create({ name, email })
    }

    getUserById(id: number): Promise<User | undefined> {
        return this.db.findById(id)
    }

    deleteUser(id: number): Promise<User[]> {
        return this.db.delete(id)
    }



}

