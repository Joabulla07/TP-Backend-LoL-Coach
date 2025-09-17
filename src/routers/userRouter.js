import express from 'express'
import {createUser, getUserById, resetPassword, resetPasswordForm} from "../controllers/userController.js";
import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";

export const userRoute = express.Router()

userRoute.post("/create", createUser)
userRoute.get("/getUser/:id", verifyTokenMiddleware, getUserById)
userRoute.post("/resetPassword/:id", resetPassword)
userRoute.get("/resetPasswordForm/:id", resetPasswordForm)