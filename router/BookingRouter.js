const express = require('express')
const router = express.Router()
const {booking} = require('../controller/Booking')
const {protect} = require('../middleware/protect')

router.post('/book',protect, booking)

module.exports = router