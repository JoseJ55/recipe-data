const RecipeModel = require("./Recipe");
const IngredientsModel = require("./Ingredients");
const MacrosModel = require("./Macros");
const StepsModel = require("./Steps");

RecipeModel.hasMany(IngredientsModel, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

RecipeModel.hasMany(MacrosModel, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

RecipeModel.hasMany(StepsModel, {
    foreignKey: "recipeId",
    onDelete: "CASCADE",
})

IngredientsModel.belongsTo(RecipeModel, {
    foreignKey: "recipeId",
})

MacrosModel.belongsTo(RecipeModel, {
    foreignKey: "recipeId",
})

StepsModel.belongsTo(RecipeModel, {
    foreignKey: "recipeId",
})

module.exports = { 
    RecipeModel, 
    IngredientsModel, 
    MacrosModel, 
    RecipeModel
};