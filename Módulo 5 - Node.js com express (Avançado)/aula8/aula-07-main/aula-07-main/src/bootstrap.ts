
import "dotenv/config"
import { App } from "./app"
import express from 'express';
import cors from "cors"
import { router } from "./app/routes"
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import { ExpressAdapter } from "./infra/adapters/inbound/express-adapter"

const instance = express()

const expressAdapter = new ExpressAdapter(instance)
expressAdapter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

const app = new App(expressAdapter)

app.setGloblasMiddleware([cors(), express.json()])
app.setRouter(router)
app.startServer()