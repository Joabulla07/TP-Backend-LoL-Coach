import Report from "../models/reportModel.js";


export const getAllReportsService = async () => {
    const reports = await Report.find({}).populate('user_id');
    return reports;
}

export const createReportService = async (from_email, description_content, subject, user_id) => {
    const report = new Report({
        report_description: description_content,
        user_email: from_email,
        user_id: user_id,
        subject: subject
    });

    await report.save();
}