const mongoose = require("mongoose")

//CREACIÓN ESQUEMA:

const moviesSchema = new mongoose.Schema({
    title: {
        type: String
    },

    director: {
        type: String
    },

    stars: {
        type: Array
    },

    image: {
        type: String
    },

    description: {
        type: String
    },

    showtimes: {
        type: Array
    }
})

//CREACIÓN MODELO:

const Movies = mongoose.model("Movie", moviesSchema)

//EXPORTACIÓN:

module.exports = Movies