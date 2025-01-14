const express = require("express");
const userRouter = express.Router();
const userModel = require('../models/userModel');
const { sendResponseJson } = require("../utils/response");

userRouter.get("/user/getAllActors", (req, res) => {});
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

userRouter.get("/user/getAllProducers", (req, res) => {});
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
