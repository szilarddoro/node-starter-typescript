import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import sampleApi from '../api/sample'
import logger from '../logger'

const app = express()

app.use(cors())
app.use(morgan('combined', { stream: { write: logger.info.bind(logger) } }))
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 }, useTempFiles: true, tempFileDir: '/tmp/' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/api', sampleApi)

export default app
