import mongoose from 'mongoose'
import { isGoodPassword } from '../utils/validators.js'
import bcrypt from "bcryptjs";


const reportSchema = new mongoose.Schema({
    reportDescription: {
        type: String,
        required: true,
        maxlength: 500,
        minlength: 10,
        trim: true,
        lowercase: true,
    },
    userEmail: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 6,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lol-coach-users-utn',
        required: true
    },
    resolution: {
        type: String,
        required: false,
        maxlength: 50,
        minlength: 2,
        trim: true,
        lowercase: true,
    },
    subject: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2,
        trim: true,
        lowercase: true,
    }
})



export default mongoose.model("lol-coaching-reports", reportSchema)