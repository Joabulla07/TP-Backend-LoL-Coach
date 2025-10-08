import Report from "../models/reportModel.js";
import User from "../models/userModel.js";
import logger from "../core/logger.js";


export const getAllReportsService = async () => {
    const reports = await Report.find({}).populate('userId', 'name lastName email');
    return reports;
}

export const createReportService = async (body) => {
    const {description_content, subject, user_id} = body
    logger.info("Entrando a crear nuevo reporte")
    const report = new Report({
        reportDescription: description_content,
        userId: user_id,
        subject: subject,
        resolution: null
    });

    await report.save();
    return {message: "Reporte creado exitosamente"}
}