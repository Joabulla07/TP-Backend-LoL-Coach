import Report from "../models/reportModel.js";


export const getAllReportsService = async () => {
    return Report.find({}).populate('userId', 'name lastName email');
}

export const createReportService = async (body) => {
    const {description_content, subject, user_id} = body

    const report = new Report({
        reportDescription: description_content,
        userId: user_id,
        subject: subject,
        resolution: null
    });

    const reporte = await report.save();
    return {message: "Reporte creado exitosamente", content: reporte._id}
}