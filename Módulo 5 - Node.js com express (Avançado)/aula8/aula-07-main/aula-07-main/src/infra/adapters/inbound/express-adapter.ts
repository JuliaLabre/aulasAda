import { Server } from "http";
import { Express } from 'express';
import { GenericHttpServerInterface } from "../../../app/ports/inbound/generic-http-server.interface";

export class ExpressAdapter implements GenericHttpServerInterface {
    private instance: Express
    constructor(instance: Express) {
        this.instance = instance
    }

    use(...handler: any) {
        this.instance.use(...handler)
    }

    get(path: string, callback: any): any {
        this.instance.get(path, callback)
    }


    listen(port: number, callback?: () => void): Server {
        return this.instance.listen(port, callback)
    }



}