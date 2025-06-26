import express from "express";

import { sendMessage, getMessages } from "../controllers/message.controller.js"; // Assuming message controller exists
import isAuthorized from "../middlewares/isAuthorized.middleware.js";
const messageRouter = express.Router();

// Route to send a message
messageRouter.post("/send/:receiver", isAuthorized, sendMessage);

// Route to get messages for a conversation
messageRouter.get("/:receiver", isAuthorized, getMessages);

export default messageRouter;
