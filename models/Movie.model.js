const { Schema, model } = require("mongoose");


const movieSchema = new Schema({
    title: String,
});
const Movie = model("Movie", movieSchema);
module.exports = Movie;