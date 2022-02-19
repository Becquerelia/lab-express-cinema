
const router = require("express").Router();
const Movies = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// RUTA A /movies:

router.get("/movies", (req, res, next) => {
    Movies.find()
      .then((response) => {
          //console.log(response)          
        res.render("movies.hbs", {response});
      })
      .catch((error) => {
        next(error)
      })
  });

  router.get("/movies/:id", (req, res, next)=>{
      Movies.findById(req.params.id)
      .then((response)=>{
          //console.log(response)
          res.render("movie-details.hbs", {response})
      })
      .catch ((error) => {
          next(error)
      })
  })

module.exports = router;
