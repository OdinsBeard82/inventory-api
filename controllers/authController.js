const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });

        res.status(201).json({
            message: "User created",
            user: {
                id: user.id,
                username: user.username
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating user"
        });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: { username }
    });

    if (!user) {
        return res.status(401).json({ message: "invalid username or password" });
    }

    const passwordValid = await bcrypt.compare(password, user.password_hash);

    if (!passwordValid) {
        return res.status(401).json({ message: "invalid username or password" });
    }

    res.status(200).json({ message: "login successful" });
};