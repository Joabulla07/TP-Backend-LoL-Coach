import {
    forgetPasswordEmailService,
    notificationReportEmailService,
    sendToMeReportService
} from "../services/emailService.js";
import logger from "../core/logger.js";


export const sendToMeReport = async (req, res) => {
    try {
        logger.info("llamando a sendtome")
        const result = await sendToMeReportService(req.body)
        const result2 = await notificationReportEmailService(req.body)


        return  res.status(200).json({result: result, result2: result2});
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al enviar el correo',
            error: error.message || error.response?.body?.message || 'Error desconocido'
        });
    }
};


export const forgetPasswordEmailSend = async(req, res) => {
    try{
        const { email } = req.body
        const result = await forgetPasswordEmailService(email)

        return res.status(200).json(result)
    } catch(error){
        if(error.message === "Usuario no encontrado"){
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        return res.status(500).json({ message: "Error del servidor" });
    }
}