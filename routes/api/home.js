const router = require("express").Router();
// add models to require

router.get('/', async (req, res) => {
    try{
        res.render("home")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;