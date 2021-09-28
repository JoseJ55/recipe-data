const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Macros extends Model{}

Macros.init(
    {
        id:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        recipeId: {
            type: DataTypes.STRING,
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