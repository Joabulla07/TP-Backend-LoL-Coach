import {config} from "../core/config.js";
import logger from "../core/logger.js";

const apiUrl = config.chatUrl;

export const chatService = async (userMessage) =>{
    const { message, conversationId, userId } = userMessage
    // logger.info(`message: ${message}`)
    // logger.info(`conversationId: ${conversationId}`)
    // logger.info(`userId: ${userId}`)
    try {
        const res = await fetch(`${apiUrl}/api/chat`, {
            method: "POST",
            body: JSON.stringify({
                message: message,
                conversationId: conversationId,
                userId: userId
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error from chat API: ${res.status} ${res.statusText} - ${errorText}`);
        }

        const data = await res.json();
        logger.info(data.response)
        return data

    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        throw error;
    }
}

export const resetChatService = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/chat/reset`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error from chat API: ${res.status} ${res.statusText} - ${errorText}`);
        }

        const data = await res.json();
        logger.info(data)
        return data
    } catch (error) {
        console.error('Error al resetear chat:', error);
        throw error;
    }
}