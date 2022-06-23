const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        required: false,
        default: "Not specified",
    },
    director: {
        type: String,
        required: false,
        default: "Not specified",
    },
    rating: {
        type: Number,
        required: false,
    },

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;