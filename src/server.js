import express from 'express'
import {json} from 'express'
import routes from './routes.js'
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(json())
app.use(routes)
export default app