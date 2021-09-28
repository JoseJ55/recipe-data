const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Steps extends Model{}

Steps.init(
    {
        id:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        recipeId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        step: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'steps'
    }
)

module.exports = Steps;