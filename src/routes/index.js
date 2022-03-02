const {Router} = require("express");
const router = Router();

//routes
router.get("/api", (req,res) =>{
    const data = {
        "name":"Pepe",
        "tw":"@eddpstr"
    }
    res.json(data);
});

module.exports = router;