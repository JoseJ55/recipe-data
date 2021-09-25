const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Macros extends Model{}

Macros.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        macro: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'macros'
    }
)

module.exports = Macros;