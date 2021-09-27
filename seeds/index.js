const seedRecipe = require("./recipe-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("Database Synced\n");
    await seedRecipe();
    console.log("Recipe Seeded\n");
}

seedAll();