

import { GenericAppInterface } from './app/ports/inbound/generic-app.interface';
import { GenericHttpServerInterface } from './app/ports/inbound/generic-http-server.interface';


export class App implements GenericAppInterface {
    private instance: GenericHttpServerInterface
    constructor(instance: GenericHttpServerInterface) {
        this.instance = instance
    }

    setGloblasMiddleware(middlewares: Array<any>) {
        this.instance.use(middlewares)
    }


    setRouter(router: any) {
        this.instance.get('/health', (req: any, res: any) => res.send("ok"))
        this.instance.use('/users', router);
    }

    startServer() {
        const PORT = process.env.PORT || 3000;
        this.instance.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
}









