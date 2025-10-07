import Report from "../models/reportModel.js";
import logger from "../core/logger.js";


export const getAllReportsService = async () => {
    const reports = await Report.find({}).populate('user_id');
    return reports;
}

export const createReportService = async (from_email, description_content, subject, user_id) => {
    logger.info("creando nuevo reporte")
    const report = new Report({
        reportDescription: description_content,
        userEmail: from_email,
        userId: user_id,
        subject: subject
    });

    await report.save();
}