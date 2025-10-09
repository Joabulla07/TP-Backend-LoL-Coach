import User from "../models/userModel.js";
import logger from "../core/logger.js";
import {createUserNotificationEmail} from "./emailService.js";


export const createUserService = async (userData) => {
    if(!userData){
        throw new Error("Error en los datos ingresados")
    }

    const { email } = userData

    const userExist = await User.findOne({email})

    if(userExist){
        throw new Error(`Usuario ${email} ya existe`)
    }

    const user = await userData.save()
    await createUserNotificationEmail(email)
    return { message: "Usuario creado", content: user}
}

export const getUserByIdService = async(userData) => {
    const { userId } = userData
    const user = await User.findById(userId)

    if(!user){
        throw new Error("Usuario no encontrado")
    }

    return {
        userId: user._id,
        name: user.name,
        lastname: user.lastName,
        email: user.email
    }
}

export const resetPasswordService = async(userId, userData) => {
    const user = await User.findById(userId)

    if(!user){
        throw new Error("Usuario no encontrado")
    }

    const userEmail = user.email;

    user.password = userData;
    await user.save(); // Esto activará el pre-save hook para hashear la contraseña

    return {
        message: "Contraseña cambiada exitosamente",
        email: userEmail
    };
}

export const deleteUserService = async(id) => {
    await User.findByIdAndDelete(id)
    return {message: 'Usuario eliminado'}
}