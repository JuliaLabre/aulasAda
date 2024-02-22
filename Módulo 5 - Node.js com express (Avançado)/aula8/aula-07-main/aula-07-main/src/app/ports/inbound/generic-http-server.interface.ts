import * as http from "http";

export interface GenericHttpServerInterface {
    use(...handler: any): any
    get(path: string, callback?: any): any
    listen?(handle: any, listeningListener?: () => void): http.Server;
}

