const mongoose = require("mongoose");

//create the schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true , unique :true},
  posterUrl: { type: String },
  rating: { type: Number },
  generes: { type: [String],default:["Action","Adventure","Drama"]},
  year : {type : Number , required : true},

  producer: { type: mongoose.Schema.Types.ObjectId , ref : 'Movie User' , required : true},
  cast: [{ type : mongoose.Schema.Types.ObjectId,ref:"Movie User", required: true }],
});

// create the model with your  schema
const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
