import express from 'express'
import { login, logout, register } from '../controllers/auth.controller.js'
import uploadProfile from '../middlewares/multer.middleware.js'
const authRouter = express.Router()

authRouter.post('/register', uploadProfile.single('profilePic'), register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

export default authRouter
