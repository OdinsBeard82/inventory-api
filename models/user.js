const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model { }

User.init(
    {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
    }
);

module.exports = User;