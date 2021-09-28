const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model{}

Ingredients.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        recipeId: {
            type: DataTypes.STRING,
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