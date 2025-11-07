const doctorInfo = require('../models/doctorInfoModel')
const patientInfo = require('../models/patientInfoModel')

// create new doctor
const createDoctor = async (req, res) => {
    const { password, genInfo } = req.body

    // add doctor to db
    try{
        const doctor = await doctorInfo.create({password, genInfo})
        res.status(200).json(doctor)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// get doctor information by doctorId
const getDoctorInfo = async (req, res) => {

    const { doctorId }  = req.params // Get doctorId from URL parameters

    try {
        const doctor = await doctorInfo.findById(doctorId) //search doctor by doctorId
        if (!doctor) { // if doctor does not exist
            return res.status(404).json({ error: "Doctor not found" })
        }
        
        res.status(200).json(doctor) // Return doctor info
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// assign patient to doctor
const assignPatientToDoctor = async (req, res) => {

    const { doctorId } = req.params // get doctor doctorId from url
    const { patientId } = req.body // get patient id from body

    try {
        const doctor = await doctorInfo.findById(doctorId) // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" })
        }
        
        // Check if patient is not yet assigned
        if (!doctor.patientsAssigned.includes(patientId)) {

            doctor.patientsAssigned.push(patientId)
            await doctor.save() // save to doctor

            res.status(200).json({ message: "Patient assigned to doctor" })
            
        } else {
            res.status(200).json({ message: "Patient already assigned to this doctor" })
        }
    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// get doctor's patient list
const getPatientList = async (req, res) => {
    const { doctorId } = req.params

    try {
        const doctor = await doctorInfo.findById(doctorId) // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" })
        }

        if (doctor.patientsAssigned && doctor.patientsAssigned.length > 0){ // check if there are patients assigned
           await doctor.populate('patientsAssigned', 'genInfo diagnosis status')

           res.status(200).json({ 
                message: "Doctor's patients listed",
                numOfPatients: doctor.patientsAssigned.length,
                patients: doctor.patientsAssigned
            })
        } else {
            res.status(200).json({ message: "Doctor has no patients assigned" })
        }
    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// see selected patient full info
const seePatientInfo = async (req, res) => {
    const { doctorId, patientId } = req.params

    try{
        const doctor = await doctorInfo.findById(doctorId)  // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" })
        }
         // Check if patient exists
        if (!doctor.patientsAssigned.includes(patientId)) {

            res.status(404).json({ error: "Patient not found" })
            
        } else {
            const patient = await patientInfo.findById(patientId) // get patient information

            res.status(200).json({
                doctor: doctor.genInfo.lname,
                patient: patient
            })
        }

    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// add diagnosis to patient
const diagnosePatient = async (req, res) => {
    const { doctorId, patientId } = req.params
    const { diagnose } = req.body

    try {
        const doctor = await doctorInfo.findById(doctorId) // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found"})
        }

        if (!doctor.patientsAssigned.includes(patientId)) { // seach patient
            return res.status(404).json({ error: "Patient not found" })
        }

        // create diagnosis
        const setDiagnosis = {
            diagnosis: diagnose
        }

        // set diagnosis
        const updatedPatient = await patientInfo.findByIdAndUpdate(
            patientId,
            {
                $set: {
                    diagnosis: setDiagnosis
                }
            }, { new: true }
        )

        res.status(201).json({
            message: "Patient diagnosed",
            diagnosis: setDiagnosis,
            patient: updatedPatient
        })

    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// add prescriptions
const addPrescriptionToPatient = async (req, res) => {
    const { doctorId, patientId } = req.params
    const { medication } = req.body
    
    try {
        const doctor = await doctorInfo.findById(doctorId)  // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" })
        }

        if (!doctor.patientsAssigned.includes(patientId)) { // search patient
            res.status(404).json({ error: "Patient not found" })
        }

        // create new presciption
        const newPrescription = {
            medication,
            date: new Date()
        }

        // push new prescription to patient's data
        const updatedPatient = await patientInfo.findByIdAndUpdate(
            patientId,
            { 
                $push: { 
                    prescriptions: newPrescription 
                }
            }, { new: true }

        )

        res.status(201).json({
            message: "Prescription added successfully",
            prescription: newPrescription,
            patient: updatedPatient
        })

    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// add notes to patient
const addNotesToPatient = async (req, res) => {
    const { doctorId, patientId } = req.params
    const { note } = req.body

    try {
        const doctor = await doctorInfo.findById(doctorId) // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "doctor not found" })
        }

        if (!doctor.patientsAssigned.includes(patientId)) { // search patient
            res.status(404).json({ error: "Patient not found" })
        }

        // create new note
        const newNote = {
            notes: note,
            date: new Date()
        }

        //push new note to patient's data
        const updatedPatient = await patientInfo.findByIdAndUpdate(
            patientId,
            {
                $push: {
                    notes: newNote
                }
            }, { new: true }

        )

        res.status(201).json({
            message: "note added successfully",
            note: newNote,
            patient: updatedPatient
        })
        

    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// set patient status
const setPatientStatus = async (req, res) => {
    const { doctorId, patientId } = req.params
    const { setStatus } = req.body

    try {
         const doctor = await doctorInfo.findById(doctorId) // search doctor
        if (!doctor) {
            return res.status(404).json({ error: "doctor not found" })
        }

        if (!doctor.patientsAssigned.includes(patientId)) { // search patient
            res.status(404).json({ error: "Patient not found" })
        }

         // set status
        const newStatus = {
            status: setStatus
        }

        //set new status to patient's data
        const updatedPatient = await patientInfo.findByIdAndUpdate(
            patientId,
            {
                $set: {
                    status: newStatus
                }
            }, { new: true }

        )

        res.status(201).json({
            message: "status set successfully",
            note: newNote,
            patient: updatedPatient
        })

    } catch (error) {
          res.status(400).json({ error: error.message })
    }
}

// set patient appointment

module.exports = {
    createDoctor,
    getDoctorInfo,
    assignPatientToDoctor,
    getPatientList,
    seePatientInfo,
    addPrescriptionToPatient,
    addNotesToPatient,
    diagnosePatient,
    setPatientStatus
    
}