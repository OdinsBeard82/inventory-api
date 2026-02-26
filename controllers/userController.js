const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const SALT_ROUNDS = 10;

// Register new user
async function registerUser(req, res) {
    try {
        const { username, password } = req.body;
        const existing = await User.findOne({ where: { username } });
        if (existing) return res.status(409).json({ error: 'Username already exists' });

        const hashed = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = await User.create({ username, password_hash: hashed });

        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ user: { id: newUser.id, username: newUser.username }, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Login existing user
async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ user: { id: user.id, username: user.username }, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { registerUser, loginUser };