const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('.models');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => res.send('Inventory API running'));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));