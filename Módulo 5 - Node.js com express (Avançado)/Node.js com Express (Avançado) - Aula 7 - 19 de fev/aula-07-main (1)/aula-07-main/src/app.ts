
import { Express, RequestHandler, IRoute, IRouterHandler, Router } from 'express';
import { JsonObject } from 'swagger-ui-express';
import { GenericServerInterface } from './infra/server/generic-express.interface';


export class App {
    private instance: GenericServerInterface
    constructor(instance: GenericServerInterface) {
        this.instance = instance
        
    }

    
}









