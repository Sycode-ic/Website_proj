const patientInfo = require('../models/patientInfoModel')

// create new patient
const createPatient = async (req, res) => {
    const {password, genInfo, anamnesis} = req.body

    // add patient to db
    try{
        const patient = await patientInfo.create({password, genInfo, anamnesis})
        res.status(200).json(patient)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// get patient information by id
const getPatientInfo = async (req, res) => {

    const { id } = req.params; // Get id from URL parameters

    try {
        const patient = await patientInfo.findById(id); //search patient by id
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        
        res.status(200).json(patient) // Return patient info
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// create new patient note

module.exports = {
    createPatient,
    getPatientInfo
}