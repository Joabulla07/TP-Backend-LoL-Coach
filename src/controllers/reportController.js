import {createReportService, getAllReportsService} from "../services/reportService.js";

export const getReports = async (req, res) => {
    try {
        const reports = await getAllReportsService()
        return res.status(200).json(reports);
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor", error: error.message });
    }
}

export const createReport = async (req, res) => {
    try {
        const report = await createReportService(req.body)
        return res.status(200).json(report);
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor", error: error.message });
    }
}