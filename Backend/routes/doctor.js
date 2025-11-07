const express = require('express')
const router = express.Router() // creates instance of router

const { // connect to controllers
    createDoctor,
    getDoctorInfo,
    assignPatientToDoctor,
    getPatientList,
    seePatientInfo,
    addPrescriptionToPatient,
    addNotesToPatient,
    diagnosePatient,
    setPatientStatus
} = require('../Controllers/doctorController')

// create new doctor
router.post('/signup', createDoctor)

// get doctor information by id
router.get('/:doctorId', getDoctorInfo)

// assign patient to doctor
router.post('/:doctorId/patients', assignPatientToDoctor)

// get doctor's list of patients
router.get('/:doctorId/patients', getPatientList)

// see selected patient full info
router.get('/:doctorId/patients/:patientId', seePatientInfo)

// set diagnosis -- test
router.post(':doctorId/patients/:patientId/diagnosis', diagnosePatient)

// add prescriptions -- test
router.post('/:doctorId/patients/:patientId/prescriptions', addPrescriptionToPatient)

// add notes  --test
router.post('/:doctorId/patients/:patientId/notes', addNotesToPatient)

// set patient status --test
router.post(':doctorId/patients/:patientId/status', setPatientStatus)

// set patient appointment
// router.post(':doctorId/patients/:patientId/appointment', )


module.exports = router