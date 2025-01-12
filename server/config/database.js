const mongoose = require("mongoose");

const mongooseUri =
  "mongodb+srv://rohitcnf:YLvUUJsyqVgJu5ry@movies.73wel.mongodb.net/Movies";

// const connectToDb = async () => {
//   await mongoose.connect(mongooseUri);
// };
async function connectToDb() {
  await mongoose.connect(mongooseUri);
}

module.exports = {
  connectToDb,
};
