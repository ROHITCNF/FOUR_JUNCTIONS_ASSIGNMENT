const express = require("express");
const movieRouter = express.Router();
const movieModel = require("../models/movieModel");
const { sendResponseJson } = require("../utils/response");
const userModel = require("../models/userModel");

movieRouter.get("/movie/getAllMovie", async (req, res) => {
  try {
    const allMovie = await movieModel.find();
    sendResponseJson(res, 200, "sucessfully fetched the data", allMovie);
  } catch (error) {
    console.log(error);
    sendResponseJson(res, 401, `Error : ${error}`);
  }
});
movieRouter.get("/movie/getMovie/:id" , async (req , res)=>{
  try {
    const id = req?.params?.id;
    const movie = await movieModel.findById(id).populate('producer').populate('cast');
    sendResponseJson(res , 200 , 'Movie data found' , movie)
  } catch (error) {
    console.log(error);
    sendResponseJson(res, 401, `Error : ${error}`);
  }
})
movieRouter.patch("/movie/editMovie/:id", (req, res) => {
  // edit the movie with the id
});
movieRouter.post("/movie/addMovie", async (req, res) => {
  //  add new movie
  try {
    const payload = req?.body;
    const { name, posterUrl, rating, cast, producer, year } = payload;
     
    // Middileware 1 on Producer
    const producerInDB =  await userModel.findOne({
      name : producer.toLowerCase() ,
      type : "PRODUCER"
    });
    
    if(!producerInDB){
      return sendResponseJson(res, 405, "Please Add the Producer details  in DB  First");
    }

    // Middileware 2 on Cast : Each of the cast should be present inside the DB
    const actorsInDb = await userModel.find({
      name: { $in: cast }, // Find multiple actors by name
      type: 'CAST',
    });
    // Check if the number of found actors matches the number of provided actors
    if (actorsInDb.length !== cast.length) {
      return sendResponseJson(res, 405, "Please Add all the  Cast details  in DB  First");
    }
    // Now we are safe to add the Movie Details in DB
    const movie = new movieModel({
      name: name,
      posterUrl: posterUrl,
      rating: rating,
      cast: actorsInDb.map((actor)=>actor._id),
      producer: producerInDB._id,
      year: year
    });
   // Validations 
    
    await movie.save();
    console.log("New Movie has been saved successfully");
    sendResponseJson(res, 200, "New Movie has been successfully saved");
  } catch (error) {
    console.log(error);
    sendResponseJson(res, 400, `Some Error Occured : ${error}`);
  }
});

module.exports = movieRouter;
