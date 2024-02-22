//@ts-nocheck

import { DeleteResult, EntityManager, EntityTarget, ObjectLiteral, Repository, UpdateResult } from "typeorm";
import { GenericDbInterface } from "../../../ports/outbound/generic-db.interface";


export class SqlDbAdapter<Entity> implements GenericDbInterface {

    private repository: Repository<Entity>

    constructor(sqlManager: EntityManager, target: EntityTarget<Entity>) {
        this.repository = sqlManager.getRepository(target)
    }

    async create(data: any): Promise<any> {
        const instance = this.repository.create(data)
        await this.repository.save(instance)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id)
    }

    async find(): Promise<any[]> {
        return await this.repository.find()
    }

    async findById(id: number): Promise<Entity> {
        return await this.repository.findOne({ where: { id } })
    }

    async update(id: number, dados: any): Promise<UpdateResult> {
        return await this.repository.update(id, { ...dados })
    }


}