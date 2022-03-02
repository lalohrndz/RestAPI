const {Router} = require("express");
const router = Router();

const fetch = require('node-fetch');
// Para poder usar la lib de node-fetch se tuvo que instalar node-fetch@2

router.get("/",async (req,res)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    res.json(users);
});

module.exports = router;