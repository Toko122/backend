const express = require('express');
const { booking } = require('../controller/Booking');
const  protect  = require('../middleware/protect');

const router = express.Router();

router.post('/book', protect, booking);

module.exports = router;