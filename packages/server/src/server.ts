import 'dotenv/config'
import './database'
import './shared/container'

import express from 'express'
import { createServer } from 'http'

import routes from '@shared/http/routes'

import debug from '@shared/log/debug'
import DebugMiddleware from '@shared/http/middlewares/DebugMiddleware'

const app = express()
const PORT = Number(process.env.APP_PORT)
const ENV = process.env.APP_ENV as 'development' | 'production'

app.use(express.json())
app.use(routes)

if(ENV === 'development') app.use(DebugMiddleware)

const server = createServer(app)

server.listen(PORT, () => {
  debug(`Server running on port ${PORT}`)
})