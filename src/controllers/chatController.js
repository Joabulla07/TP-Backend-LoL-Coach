import User from "../models/userModel.js";
import {chatService} from "../services/chatService.js";


export const chat = async (req, res) => {
    try {
        const userMessage = req.body
        const result = await chatService(userMessage)
        return res.status(201).json(result)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}