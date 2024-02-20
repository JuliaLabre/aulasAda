
import "dotenv/config"
import { App } from "./app"
import express from 'express';
import cors from "cors"
import { router } from "./routes"
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'


const instance = express()

const app = new App(instance)

app.setGloblasMiddleware([cors(), express.json()])
app.setSwagger("/docs", swaggerUi, swaggerFile)
app.setRouter(router)
app.startServer()