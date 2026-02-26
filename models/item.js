const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Item extends Model {
  static associate(models) {
    Item.belongsTo(models.Category);
  }
}

Item.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Item',
    tableName: 'Items',
    timestamps: true,
  }
);

module.exports = Item;