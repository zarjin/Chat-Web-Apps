import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'

import dbConnection from './configs/db.config.js'
import authRouter from './routes/auth.routes.js'

const app = express()
const PORT = process.env.PORT

dbConnection()

app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
