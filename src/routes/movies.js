const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const movies = require("../sample.json");
//console.log(movies);

router.get("/",(req,res)=>{
    res.send(movies);
})

router.post("/",(req,res)=>{
    const {Title,Director,Year,Rating} = req.body;
    if(Title && Director && Year && Rating){
        const id = movies.length + 1;
        const newMovie = {id,...req.body};

        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error:"There was an error."});
    }
    res.send("recibido");
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    _.each(movies,(movie,i)=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send("deleted");
});

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {Title,Director,Year,Rating} = req.body;

    if(Title && Director && Year && Rating){
        _.each(movies,(movie,i)=>{
            if(movie.id == id){
                movie.Title = Title;
                movie.Director = Director;
                movies.Year = Year;
                movie.Rating = Rating;
            }
        })
        
    }else{
        res.status(500).json("There was an error.")
    }
    res.json(movies)
});

module.exports = router;