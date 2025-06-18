const express = require('express');
const router = express.Router();
const { getUserCount, allAppointment, countContact } = require('../controller/Admin');

router.get('/dashboard/userStats', getUserCount);         
router.get('/dashboard/appointment', allAppointment);     
router.get('/dashboard/conntact', countContact); 

module.exports = router;
