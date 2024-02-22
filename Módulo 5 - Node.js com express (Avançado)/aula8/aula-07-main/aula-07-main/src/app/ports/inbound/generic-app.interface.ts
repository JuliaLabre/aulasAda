export interface GenericAppInterface {
    setGloblasMiddleware(middlewares: any[]): void
    setRouter(router: any): void
    startServer?(): void
}