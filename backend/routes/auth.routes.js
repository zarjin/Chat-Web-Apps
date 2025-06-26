import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import uploadProfile from "../middlewares/multer.middleware.js";
const authRouter = express.Router();

authRouter.post("/register", uploadProfile.single("profilePic"), register);
authRouter.post("/login", login);
authRouter.get("/logout", logout); // Changed from POST to GET since logout is idempotent

export default authRouter;
