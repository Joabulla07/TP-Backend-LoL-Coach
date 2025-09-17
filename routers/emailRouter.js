import express from 'express';
import {forgetPasswordEmailSend, sendToMeReport} from '../controllers/emailController.js';
import {sendToMeReportService} from "../services/emailService.js";

export const emailRoute = express.Router();

emailRoute.post('/send-to-me', sendToMeReport);
emailRoute.post('/forgetPassword', forgetPasswordEmailSend)
