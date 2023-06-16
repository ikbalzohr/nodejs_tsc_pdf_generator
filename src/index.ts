import express, { type Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { routes } from './routes'
import { logger } from './utils/logger'
import deserializeToken from './middleware/deserialized_token'

// connect DB
import './utils/connectToDB'
import CONFIG from './config/environment'
import pdfGenerator from './utils/pdf'

const app: Application = express()
const port: number = CONFIG.port || 4000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(deserializeToken)

routes(app)

pdfGenerator()

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`)
})
