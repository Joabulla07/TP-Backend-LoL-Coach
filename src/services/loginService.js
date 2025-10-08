import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import logger from "../core/logger.js";


export const loginService = async (userData) => {
    const { email, password } = userData

    if(!(email && password)){
        const error = new Error("There's a missing field")
        error.statusCode = 400;
        throw error;
    }

    const userFound = await User.findOne({email})

    if(!userFound){
        const error = new Error("User is incorrect")
        error.statusCode = 400
        error.message = "User is incorrect"
        throw error
    }

    if(!bcrypt.compareSync(password, userFound.password)){
        const error = new Error("Password is incorrect")
        error.statusCode = 401
        error.message = "Password is incorrect"
        logger.info("error de contraseña")
        throw error
    }

    const payload = {
        id: userFound._id,
        email: userFound.email,
        name: userFound.name,
        lastName: userFound.lastName,
    }

    const token = jwt.sign(payload, "secret", { expiresIn: "1h" })

    const userResponse = {
        id: userFound._id,
        email: userFound.email,
        name: userFound.name,
        lastName: userFound.lastName,
    };

    return {message: "Logged in", token, user: userResponse}
}