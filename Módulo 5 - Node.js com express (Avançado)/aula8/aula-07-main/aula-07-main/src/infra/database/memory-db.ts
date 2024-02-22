import { faker } from "@faker-js/faker"
import { User } from "../../app/models/user"
import { GenericDbInterface } from "../../app/ports/outbound/generic-db.interface"





export class MemoryDb implements GenericDbInterface {
    private table: any[]

    constructor(table: any[]) {
        this.table = table
    }

    async create(dados: any) {
        const salvar: User = {
            ...dados,
            id: faker.number.int({ min: 1, max: 100 }),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
        this.table.push(salvar)
        return Promise.resolve(salvar)
    }

    async findById(id: number) {
        const product = this.table.find(product => product.id == id)
        return Promise.resolve(product)
    }

    async find() {
        return Promise.resolve(this.table)
    }

    async update(id: number, dados: any) {
        const index = this.table.findIndex(product => product.id == id)
        this.table[index] = {
            ...dados,
            id: Number(id),
            createdAt: this.table[index].createdAt,
            updatedAt: faker.date.recent()
        }
        return Promise.resolve(this.table[index])
    }

    async delete(id: number) {
        const index = this.table.findIndex(product => product.id == id)
        this.table.splice(index, 1)
        return Promise.resolve(this.table)
    }
}

