const express = require("express");
const userRouter = express.Router();

userRouter.get("/user/getAllActors", (req, res) => {});
userRouter.post("/user/addActor", (req, res) => {});

userRouter.get("/user/getAllProducers", (req, res) => {});
userRouter.post("/user/addProducer", (req, res) => {});

module.exports = userRouter;
