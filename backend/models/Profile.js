const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
{
    id : String,
    name : String,
    age: Number , 
    heigth : Number,
    weight : Number,
    identificationMarks : String,
    bloodGroup : String,
    allergies : [String]
 }
);
const profileModel = mongoose.model("profile" , ProfileSchema);

module.exports =  profileModel;