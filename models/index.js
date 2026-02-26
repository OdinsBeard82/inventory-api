'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./user');
const Item = require('./item');
const Category = require('./category');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Item = Item;
db.Category = Category;

// Call static associate methods after all models are loaded
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;