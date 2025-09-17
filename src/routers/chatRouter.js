import express from 'express';
import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";
import {chat} from "../controllers/chatController.js";

export const chatRoute = express.Router();

chatRoute.post('/chat', verifyTokenMiddleware, chat)


