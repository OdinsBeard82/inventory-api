const express = require('express');
const router = express.Router();
const { adminLoginPage, adminLogin } = require('../controllers/userController');

router.get('/admin', adminLoginPage);
router.post('/admin', adminLogin);

module.exports = router;