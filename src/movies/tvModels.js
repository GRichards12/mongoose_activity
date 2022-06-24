const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
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

const Show = mongoose.model("Show", showSchema);

module.exports = Show;