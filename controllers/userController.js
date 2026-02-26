const User = require('../models/user');
const bcrypt = require('bcrypt');

async function adminLoginPage(req, res) {
    res.render('adminLogin');
}

async function adminLogin(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user && await bcrypt.compare(password, user.password_hash)) {
        req.session.isAdmin = true;
        res.redirect('/categories');
    } else {
        res.redirect('/admin');
    }
}

module.exports = {
    adminLoginPage,
    adminLogin
};