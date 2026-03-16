const db = require('../models');
const User = db.User;

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

    const user = await db.User.findOne({
        where: { username }
    });

    if (!user) {
        return res.status(401).json({ message: "invalid username or password" });
    }
}

