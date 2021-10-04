const router = require("express").Router();
const {v4: uuidv4} = require("uuid");
const { Recipe, Ingredients, Macros, Steps } = require("../../models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;
// add models to require

router.get('/', async (req, res) => {
    try{
        res.render("home")
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/api', async (req, res) => {
    try{
        console.log(req.query.i)
        const checkOne = await Recipe.findOne({raw: true, where: {name: req.query.i}})
        const checkAll = await Recipe.findAll({raw: true, where: {name: {[Op.like]: "%"+req.query.i+"%"}}})
        // const checkAll = await Recipe.findAll({raw: true, where: {name: req.query.i}})
        // console.log(checkOne)
        // console.log(checkAll)

        if (checkOne != null && checkAll != null){
            res.send({data: {exact: checkOne, similar: checkAll}, params: req.query})
        } else {
            if (checkOne === null) {
                res.send({data: checkAll, params: req.query})
            } else if (checkAll === null ){
                res.send({data: checkOne, params: req.query})
            } else {
                res.send({error: "Couldn't find data", params: req.query})
            }
        }

        // if (checkOne === null) {
        //     res.send({error: "not one"})
        // } 
        // if(checkAll === null){
        //     res.send({error: "none"})
        // }
        // else {
        //     // console.log(checkOne)
        //     res.send({data: checkAll, params: req.query})

        // }
        // console.log(checkOne)
        // res.status(200).json("sucess");
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post('/api', async (req, res) => {
    try{
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
    } catch (err) {
        res.status(500).json({error: err});
    }
})

module.exports = router;