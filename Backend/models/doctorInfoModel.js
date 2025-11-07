const mongoose = require('mongoose')

const Schema = mongoose.Schema

const doctorGenInfoSchema = new Schema({

    fname: {
        type: String,
        required: true
    },
    midname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    specialization:{
        type: String,
        required: true
    }
})

const doctorInfoSchema = new Schema({
    
    password: {
        type: String,
        required: true
    },
    genInfo: doctorGenInfoSchema,

    // reference to patients, only stores patients assigned to this doctor
    patientsAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patientInfo'  // Reference to your patient model
    }],

    // prescriptions: prescriptionSchema,  -- to be added by doctor

}, { timestamps: true})

module.exports = mongoose.model('doctorInfo', doctorInfoSchema)