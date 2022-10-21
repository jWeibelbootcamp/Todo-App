const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init(
    { // first parameter, define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        description: {
            type: DataTypes.TEXT, 
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'user',
                key: 'id',
            }
        }
    }, 
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'task',
    } 
);