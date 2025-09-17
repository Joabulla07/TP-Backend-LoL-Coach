import express from 'express';
import {forgetPasswordEmailSend, sendToMeReport} from '../controllers/emailController.js';
import {sendToMeReportService} from "../services/emailService.js";
import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";

export const emailRoute = express.Router();

emailRoute.post('/send-to-me', verifyTokenMiddleware, sendToMeReport);
emailRoute.post('/forgetPassword', forgetPasswordEmailSend)
