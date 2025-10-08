import Report from "../models/reportModel.js";
import User from "../models/userModel.js";
import logger from "../core/logger.js";


export const getAllReportsService = async () => {
    const reports = await Report.find({}).populate('userId');
    return reports;
}

export const createReportService = async (from_email, description_content, subject, user_id) => {
    logger.info("Entrando a crear nuevo reporte")
    const report = new Report({
        reportDescription: description_content,
        userEmail: from_email,
        userId: user_id,
        subject: subject
    });

    await report.save();
    return {message: "Reporte creado exitosamente"}
}