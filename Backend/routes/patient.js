const express = require('express')
const router = express.Router() // creates instance of router

const { // connect to controllers
    createPatient,
    getPatientInfo,
} = require('../Controllers/patientController')

// create new patient
router.post('/signup', createPatient)

// get patient information by id
router.get('/:id', getPatientInfo)


module.exports = router