import express from 'express';
import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";
import {chat, resetChat} from "../controllers/chatController.js";

export const chatRoute = express.Router();

chatRoute.post('/chat', verifyTokenMiddleware, chat)
chatRoute.post('/chat/reset', verifyTokenMiddleware, resetChat)


