import { Express, RequestHandler, IRoute, IRouterHandler, Router } from 'express';
import { JsonObject } from 'swagger-ui-express';
import { GenericServerInterface } from './generic-express.interface';


export class ExpressAdapter  implements GenericServerInterface{

    private instance: Express

    constructor( instance: Express) {
        
        this.instance = instance;
    }

    setGlobalMiddleware(middlewares: Array<RequestHandler<IRouterHandler<IRoute>>>) {
        this.instance.use(middlewares);
    }

    setSwagger(path: string, swaggerUi: any, swaggerFile: JsonObject) {
        this.instance.use(path, swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
setRouter(router: Router) {
        this.instance.get('/health', (_, res) => res.send("ok"));
        this.instance.use('/users', router);
    }

    startServer() {
        const PORT = process.env.PORT || 3000;
        this.instance.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
}