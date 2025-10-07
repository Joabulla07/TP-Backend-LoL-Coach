import SibApiV3Sdk from 'sib-api-v3-sdk';
import { config } from "../core/config.js";
import User from "../models/userModel.js";
import {loadEmailTemplate} from "../utils/emailHelper.js";
import Report from "../models/reportModel.js";
import {createReportService} from "./reportService.js";
import logger from "../core/logger.js";


const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = config.brevoApiKey;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();


export const forgetPasswordEmailService = async(email) => {
    console.log(email)
    const user = await User.findOne({email});
    console.log(user)
    if(!user){
        throw new Error("Usuario no encontrado");
    }

    const resetUrl = `${process.env.FRONTEND_URL}/api/user/resetPasswordForm/${user._id}`;

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    const template = await loadEmailTemplate('FORGOT_PASSWORD_RESET_EMAIL', {
        link: resetUrl,
    });

    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        email: email
    }];

    sendSmtpEmail.subject = "Restablecer contraseña";
    sendSmtpEmail.htmlContent = template;

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        return { success: true, message: 'Correo de restablecimiento enviado' };
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo de restablecimiento');
    }
}

export const sendToMeReportService = async (userData) => {
    logger.info(userData)
    const { from_email, description_content, subject, user_id} = userData

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        email: config.correoRemitente,
        name: config.nombreRemitente
    }];

    sendSmtpEmail.subject = `Reporte de usuario: ${subject}`;
    sendSmtpEmail.textContent = `Usuario Email: ${from_email}\n\nConsultas: ${description_content}`;

    await createReportService(from_email, description_content, subject, user_id)

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return {message: 'Correo enviado correctamente', content: data};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo');
    }
}


export const notificationReportEmailService = async (userData, reqType) => {
    const { from_email, description_content, subject} = userData
    let template = null

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    if(reqType === "reporte"){
        template = await loadEmailTemplate('NOTIFICATION_REPORT', {
            user_email: from_email });
    }
    else {
        template = await loadEmailTemplate('NOTIFICATION_CONSULTA', {
            user_email: from_email });
    }


    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        name: from_email,// You might want to use a name if available
        email: from_email
    }];

    sendSmtpEmail.subject = `Recibimos tu ${reqType}`;
    sendSmtpEmail.htmlContent = template;

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return {message: 'Correo enviado correctamente', content: data};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo');
    }
}


export const notificationChangePasswordEmailService = async (email) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    const template = await loadEmailTemplate('CHANGE_PASSWORD_EMAIL', {
        user_email: email });

    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        email: email
    }];

    sendSmtpEmail.subject = "Cambio de contraseña exitoso";
    sendSmtpEmail.htmlContent = template;

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return {message: 'Correo enviado correctamente', content: data};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo');
    }
}

export const createUserNotificationEmail = async(email) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    const template = await loadEmailTemplate('CREATE_USER_EMAIL', {
        user_email: email });

    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        email: email
    }];

    sendSmtpEmail.subject = "Bienvenido a League of Coaching";
    sendSmtpEmail.htmlContent = template;

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return {message: 'Correo enviado correctamente', content: data};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo');
    }
}

export const sendFormService = async (userData) => {
    const { from_email, description_content, subject} = userData

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = {
        name: config.nombreRemitente,
        email: config.correoRemitente
    };

    sendSmtpEmail.to = [{
        name: config.nombreRemitente,
        email: config.correoRemitente
    }];

    sendSmtpEmail.subject = `Formulario de consulta`;
    sendSmtpEmail.textContent = `Usuario Email: ${from_email}\n\nConsultas: ${description_content}`;

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return {message: 'Correo enviado correctamente', content: data};
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo');
    }
}