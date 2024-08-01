const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Category = require('./category');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

Item.belongsTo(Category);
Category.hasMany(Item);

module.exports = Item;
