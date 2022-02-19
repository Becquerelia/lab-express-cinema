
const router = require("express").Router();
const Movies = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// RUTA AL LISTADO COMPLETO DE PELÍCULAS (ITERACIÓN 3):

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

  // RUTA A CADA PELÍCULA EN DETALLE (ITERACIÓN 4):

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
