const express = require("express");
const movieRouter = express.Router();
const movieModel = require("../models/movieModel");
const { sendResponseJson } = require("../utils/response");

movieRouter.get("/movie/getAllMovie", async (req, res) => {
  try {
    const allMovie = await movieModel.find();
    sendResponseJson(res, 200, "sucessfully fetched the data", allMovie);
  } catch (error) {
    console.log(error);
    sendResponseJson(res, 401, `Error : ${error}`);
  }
});
movieRouter.patch("/movie/editMovie/:id", (req, res) => {
  // edit the movie with the id
});
movieRouter.post("/movie/addMovie", async (req, res) => {
  //  add new movie
  try {
    const payload = req?.body;
    const movie = new movieModel({
      name: payload?.name,
      posterUrl: payload?.posterUrl,
      rating: payload?.rating,
      generes: payload?.generes,
      cast: payload?.cast,
      producer: payload?.producer,
    });

    await movie.save();
    console.log("New Movie has been saved successfully");
    sendResponseJson(res, 200, "New Movie has been successfully saved");
  } catch (error) {
    console.log(error);
    sendResponseJson(res, 400, `Some Error Occured : ${error}`);
  }
});

module.exports = movieRouter;
