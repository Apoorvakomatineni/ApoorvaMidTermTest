// Website - Movie Database
// Author - Apoorva Komatineni
// File - movie.js
// ID - 301231336
let mongoose = require("mongoose");

// Create a model class
let movieModel = mongoose.Schema(
  {
    Title: String,
    Synopsis: String,
    Year: Number,
    Director: String,
    Genre: String,
  },
  {
    collection: "movies",
  }
);

module.exports = mongoose.model("Movie", movieModel);
