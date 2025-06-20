const express = require('express');
const router = express.Router();
const { getUserCount, allAppointment, countContact } = require('../controller/Admin');

const getContact = require('../controller/Contact');
const getAppointment = require('../controller/Booking')

router.get('/dashboard/userStats', getUserCount);  

router.get('/dashboard/appointment', allAppointment);   
router.get('/dashboard/getAppointment', getAppointment.getBooking)

router.get('/dashboard/contact', countContact); 
router.get('/dashboard/getContact', getContact.getContacts);

module.exports = router;
