import {config} from "../core/config.js";
import logger from "../core/logger.js";


export const chatService = async (userMessage) =>{
    const apiUrl = config.chatUrl;
    const { message } = userMessage
    logger.info(`message: ${message}`)
    try {
        const res = await fetch(`${apiUrl}/api/chat`, {
            method: "POST",
            body: JSON.stringify({
                message: message,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        logger.info(data)
        return data

    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        throw error;
    }
}