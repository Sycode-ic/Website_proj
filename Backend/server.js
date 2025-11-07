// server - entry file for backend application
const express = require('express')

// express app
const app = express()

// connect/import files
const patientRoutes = require('./routes/patient')
const doctorRoutes = require('./routes/doctor')
const loginRoutes = require('./routes/login')

const { default: mongoose } = require('mongoose')

// port
const PORT = 4000

// mongodb
const MONGO='mongodb+srv://mjramos:teamApass@mernapp.aqsknpr.mongodb.net/?appName=MernApp'

// middleware
app.use(express.json()) // if req has body(data sending to server), passes to req handler

// log requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.get('/', (req, res) => { -- for route testing, not needed
//     res.json({mssg: "welcome, in root route"})
// })

// routes
app.use('/patient', patientRoutes)
app.use('/doctor', doctorRoutes)
app.use('/login', loginRoutes)

// connect to datebase
mongoose.connect(MONGO)
    .then(() => { // execute after connection is complete
    // listen for requests
    app.listen(PORT, () => {
    console.log('listening on: localhost:4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })