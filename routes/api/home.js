const router = require("express").Router();
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
        const data = req.body
        console.log(data)
        res.send(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;