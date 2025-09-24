import express from 'express'
import {startServer} from "../controllers/startController.js";

export const startRouter = express.Router()

startRouter.get("/start", startServer)