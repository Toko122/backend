const express = require('express');
const router = express.Router();
const { allAppointment, getUserCount,  } = require('../controller/Admin');
const protect  = require('../middleware/protect');

router.get('/appointment', protect, allAppointment);
router.get('/userStats', getUserCount);


module.exports = router;
