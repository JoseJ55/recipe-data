const Recipe = require("./Recipe");
const Ingredients = require("./Ingredients");
const Macros = require("./Macros");
const Steps = require("./Steps");

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

module.exports = { 
    Recipe, 
    Ingredients, 
    Macros, 
    Steps
};