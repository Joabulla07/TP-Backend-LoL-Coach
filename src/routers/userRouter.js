import express from 'express'
import {
    changePassword,
    createUser,
    getUserById,
    resetPassword,
    resetPasswordForm,
    deleteUser
} from "../controllers/userController.js";
import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";

export const userRoute = express.Router()

userRoute.post("/create", createUser)
userRoute.get("/getUser/:id", verifyTokenMiddleware, getUserById)
userRoute.post("/resetPassword/:id", resetPassword) // como es por un ejs no permite patch
userRoute.get("/resetPasswordForm/:id", resetPasswordForm) // trae un ejs
userRoute.patch("/changePassword/:id", verifyTokenMiddleware,changePassword)
userRoute.delete("/delete/:id", verifyTokenMiddleware, deleteUser)