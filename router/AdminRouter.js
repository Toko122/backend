const express = require('express')
const router = express.Router()
const {allAppointment} = require('../controller/Admin')
const {protect} = require('../middleware/protect')

router.get('/appointment', protect, allAppointment)