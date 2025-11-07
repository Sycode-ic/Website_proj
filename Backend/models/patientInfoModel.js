const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const patientAccDetailSchema = new Schema({
//     id: {
//         type: Number,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

const patientGenInfoSchema = new Schema({

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
    address: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
})

const AnamnesisSchema = new Schema({
    bloodType: {
        type: String,
        required: true
    },
    knownAllergies: [{type: String}],
    chronicDiseases: [{type: String}],
    pastIllnessesSchema: [{type: String}],
})

const prescriptionSchema = new Schema({
    medication: String,
    date: Date
})

const patientInfoSchema = new Schema({

    password: {
        type: String,
        required: true
    },
    genInfo: patientGenInfoSchema,
    anamnesis: AnamnesisSchema,

    diagnosis: {
        type: String,
    },

    prescriptions: prescriptionSchema,

    notes: [{
        type: String,
    }],

    status: {
        type: String,
        enum: ['stable', 'urgent', 'critical'],
        default: 'stable'
    },

    appointments: {
        type: Date
    }

}, { timestamps: true})

module.exports = mongoose.model('patientInfo', patientInfoSchema)