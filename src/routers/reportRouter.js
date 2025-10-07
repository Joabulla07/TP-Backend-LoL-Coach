import express from 'express'
import {getReports, createReport} from "../controllers/reportController.js";
import { verifyTokenMiddleware } from '../middleware/verifyTokenMiddleware.js';

export const reportRoute = express.Router()

reportRoute.get("/", getReports)
reportRoute.post("/create", verifyTokenMiddleware, createReport)