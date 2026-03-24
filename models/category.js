'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'Categories',
    timestamps: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Item, { foreignKey: 'categoryId' });
  };

  return Category;
};