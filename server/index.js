const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectToDb } = require("./config/database");
const port = 7777;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
//Middileware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//Routes
const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");
app.use("/", userRouter);
app.use("/", movieRouter);

//DB connection function
connectToDb()
  .then(() => {
    console.log("DB Connection SuccessFul");
    listenToServer();
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

app.get("/", (req, res) => {
  res.json({ test: "test" });
});

const listenToServer = () => {
  app.listen(port, () => {
    console.log(`Server Start listening at ${port}`);
  });
};
