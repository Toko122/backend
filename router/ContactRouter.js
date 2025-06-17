const express = require('express');
const { postContacts } = require('../controller/Contact');
const  protect  = require('../middleware/protect');
const router = express.Router()

router.post('/contact', protect, postContacts)

module.exports = router