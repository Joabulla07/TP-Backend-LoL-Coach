import User from "../models/userModel.js";
import {chatService, resetChatService} from "../services/chatService.js";
import logger from "../core/logger.js";


export const chat = async (req, res) => {
    try {
        const userMessage = req.body
        logger.info(`userMessage: ${userMessage}`)
        const result = await chatService(userMessage)
        return res.status(201).json(result)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

export const resetChat = async (req, res) => {
    try {
        const result = await resetChatService()
        return res.status(200).json(result)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}