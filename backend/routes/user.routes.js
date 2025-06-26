import express from "express";
import {
  profile,
  otherProfile,
  deleteProfile,
  getAllUser,
} from "../controllers/user.controller.js";
import isAuthorized from "../middlewares/isAuthorized.middleware.js";

const userRouter = express.Router();

userRouter.get("/profile", isAuthorized, profile);
userRouter.get("/other/:id", isAuthorized, otherProfile);
userRouter.delete("/delete", isAuthorized, deleteProfile);
userRouter.get("/all", isAuthorized, getAllUser);

export default userRouter;
