'use strict';

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'Users',
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                user.password_hash = await bcrypt.hash(user.password, 10);
            }
        }
    });

    return User;
};