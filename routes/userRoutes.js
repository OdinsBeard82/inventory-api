const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/admin', (req, res) => {
    res.render('adminLogin');
});

router.post('/admin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password_hash)) {
        req.session.isAdmin = true;
        res.redirect('/categories');
    } else {
        res.redirect('/admin');
    }
});

module.exports = router;
