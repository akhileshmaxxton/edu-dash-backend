const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/contact',authController.saveContactDetails);


module.exports = router;