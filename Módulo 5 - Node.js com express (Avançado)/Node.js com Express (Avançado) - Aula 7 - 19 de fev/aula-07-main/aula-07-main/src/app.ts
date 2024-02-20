
import { Express, RequestHandler, IRoute, IRouterHandler, Router } from 'express';
import { JsonObject } from 'swagger-ui-express';

//Mexer aqui
// export interface GenericExpressAdapter {
//     create(data: any): Promise<any>
//     findById(id: number): Promise<any>
//     find(): Promise<any[]>
//     update(id: number, dados: any): Promise<any>
//     delete(id: number): Promise<any>
// }
export class App {
    private instance: Express
    constructor(instance: Express) {
        this.instance = instance
    }

    setGloblasMiddleware(middlewares: Array<RequestHandler<IRouterHandler<IRoute>>>) {
        this.instance.use(middlewares)
    }

    setSwagger(path: string, swaggerUi: any, swaggerFile: JsonObject) {
        this.instance.use(path, swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }

    setRouter(router: Router) {
        this.instance.get('/health', (_, res) => res.send("ok"))
        this.instance.use('/users', router);
    }

    startServer() {
        const PORT = process.env.PORT || 3000;
        this.instance.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
}









