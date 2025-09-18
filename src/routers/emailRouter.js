import express from 'express';
import {forgetPasswordEmailSend, sendForm, sendToMeReport} from '../controllers/emailController.js';

import {verifyTokenMiddleware} from "../middleware/verifyTokenMiddleware.js";

export const emailRoute = express.Router();

emailRoute.post('/send-to-me', verifyTokenMiddleware, sendToMeReport);
emailRoute.post('/sendForm', sendForm);
emailRoute.post('/forgetPassword', forgetPasswordEmailSend)
