const express = require('express');
const { booking, getBooking } = require('../controller/Booking');
const  protect  = require('../middleware/protect');

const router = express.Router();

router.post('/book', protect, booking);
router.get('/book', getBooking)

module.exports = router;