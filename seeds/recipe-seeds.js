const { RecipeModel } = require("../models");

const RecipeData = [
    {
        id: 1,
        name: "eggs",
        desc: "egss",
    },
];

const seedRecipe = () => RecipeModel.bulkCreate(RecipeData);

module.exports = seedRecipe;