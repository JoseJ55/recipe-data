const router = require("express").Router();
const {v4: uuidv4} = require("uuid");
const { Recipe, Ingredients, Macros, Steps } = require("../../models")
// add models to require

router.get('/', async (req, res) => {
    try{
        res.render("home")
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/api', async (req, res) => {
    try{
        console.log("working")
        let recipeID = uuidv4();
        const { name, desc, ingredient, macro, step } = req.body

        const checkID = await Recipe.findByPk(recipeID);
        const checkName = await Recipe.findOne({where: {name: name}});

        if(checkID){
            res.status(200).json("Error try again!")
        } else if(checkName) {
            res.status(200).json("Already in database!")
        } 
        else {
            try{
                console.log(recipeID)
                console.log(name)
                console.log(desc)
                console.log(ingredient)
                console.log(macro)
                console.log(step)
                //check each create since one is not working.

                await Recipe.create({id:recipeID, name:name, desc:desc});

                for(let i=0; i<ingredient.length;i++){
                    await Ingredients.create({id:uuidv4(), recipeId:recipeID, ingredient:ingredient[i]});
                };

                for(let i=0; i<macro.length; i++) {
                    await Macros.create({id:uuidv4(), recipeId:recipeID,         macro:macro[i]});
                };

                for(let i=0; i<step.length; i++) {
                    await Steps.create({id:uuidv4(), recipeId:recipeID, step:step[i]})
                }

                res.status(200).json("Success!") 
            }catch(err){
                res.status(500).json({msg: "Error adding data!", error: err})
            }
        }
        // res.status(200);
    } catch (err) {
        res.status(500).json({error: err});
    }
})

module.exports = router;