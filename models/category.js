const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.Item);
  }
}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    timestamps: true,
  }
);

module.exports = Category;