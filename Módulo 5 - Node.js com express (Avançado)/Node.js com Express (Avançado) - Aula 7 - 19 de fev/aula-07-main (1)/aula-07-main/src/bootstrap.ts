
import "dotenv/config"
import { App } from "./app"
import express from 'express';
import cors from "cors"
import { router } from "./routes"
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import {ExpressAdapter} from './infra/server/app-adapter'


const instance = express()
const expressAdapter = new ExpressAdapter(instance)

// const app = new App(expressAdapter)

expressAdapter.setGlobalMiddleware([cors(), express.json()])
expressAdapter.setSwagger("/docs", swaggerUi, swaggerFile)
expressAdapter.setRouter(router)
expressAdapter.startServer()