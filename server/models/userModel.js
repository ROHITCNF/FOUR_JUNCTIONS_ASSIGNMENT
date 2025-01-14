const mongoose = require("mongoose");

//create the schema

const userSchema = new mongoose.Schema({
name : {type : String , unique : true , required : true},
gender : {type : String ,enum:["MALE" , "FEMALE" , "TRANSGENDER"], required : true},
dob : {type : String , required : true},
bio : {type : String },
type :{type : String ,enum:["PRODUCER" , "CAST" , "USER"], required : true} 
});
const userModel = mongoose.model("Movie User" , userSchema);
module.exports = userModel;