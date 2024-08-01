const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@localhost:5432/inventory_db');

module.exports = sequelize;
