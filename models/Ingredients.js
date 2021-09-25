const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model{}

Ingredients.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredients'
    }
)

module.exports = Ingredients;