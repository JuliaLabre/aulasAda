export interface GenericDbInterface {
    create(data: any): Promise<any>
    findById(id: number): Promise<any>
    find(): Promise<any[]>
    update(id: number, dados: any): Promise<any>
    delete(id: number): Promise<any>
}