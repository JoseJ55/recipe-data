const RecipeModel = require("./Recipe");
const IngredientsModel = require("./Ingredients");
const MacrosModel = require("./Macros");
const StepsModel = require("./Steps");

const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Recipe = RecipeModel(sequelize, Sequelize);
const Ingredients = IngredientsModel(sequelize, Sequelize);
const Macros = MacrosModel(sequelize, Sequelize);
const Steps = StepsModel(sequelize, Sequelize);

Recipe.hasMany(Ingredients, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

Recipe.hasMany(Macros, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

Recipe.hasMany(Steps, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

Ingredients.belongsTo(Recipe, {
    foreignKey: "recipeId",
})

Macros.belongsTo(Recipe, {
    foreignKey: "recipeId",
})

Steps.belongsTo(Recipe, {
    foreignKey: "recipeId",
})

module.exports = { Recipe, Ingredients, Macros, Recipe };