const express = require('express')
const router = express.Router() // creates instance of router

router.get('/', (req, res) => {
    res.json({mssg: "in login route"})
})

module.exports = router