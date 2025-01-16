const express = require("express");
const userRouter = express.Router();
const userModel = require('../models/userModel');
const { sendResponseJson } = require("../utils/response");

userRouter.get("/user/getAllActors", async (req, res) => {
    try {
        const allActors = await userModel.find({type : "CAST"});
        sendResponseJson(res , 200 , 'All Casts Fetched Successfully' , allActors)
    } catch (error) {
        console.log(error);
        sendResponseJson(res , 400 , error);
    }

});
userRouter.post("/user/addActor", async(req, res) => {
   try {
     const payload = req?.body;
 
     // name will be in lowercase
     const user = new userModel ({
     name : payload?.name.toLowerCase(),
     dob : payload?.dob,
     gender : payload?.gender,
     bio : payload?.bio,
     type : "CAST"
     })
     await user.save();
     sendResponseJson(res , 200 , 'New Cast added Successfully');

   } catch (error) {
    console.log(error);
    sendResponseJson(res , 401 , error);
   }

});

userRouter.get("/user/getAllProducers", async(req, res) => {
    try {
        const allProducers = await userModel.find({type : "PRODUCER"});
        sendResponseJson(res , 200 , 'All PRODUCERS Fetched Successfully' , allProducers)
    } catch (error) {
        console.log(error);
        sendResponseJson(res , 400 , error);
    }
});
userRouter.post("/user/addProducer", async(req, res) => {
    try {
        const payload = req?.body;
        console.log(payload);
        // name will be in lowercase
        const user = new userModel ({
        name : payload?.name.toLowerCase(),
        dob : payload?.dob,
        gender : payload?.gender,
        bio : payload?.bio,
        type : "PRODUCER"
        })
        await user.save();
        sendResponseJson(res , 200 , 'New Producer added Successfully');
      } catch (error) {
       console.log(error);
       sendResponseJson(res , 401 , error);
      }
});

module.exports = userRouter;
