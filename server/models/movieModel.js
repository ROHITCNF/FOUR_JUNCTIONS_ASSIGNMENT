const mongoose = require("mongoose");

//create the schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  posterUrl: { type: String },
  producer: { type: String },
  rating: { type: Number },
  generes: { type: [String], required: true },
  cast: { type: [String], required: true },
});

// create the model with your  schema
const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
