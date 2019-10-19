const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
{
    id : String,
    name:String,
    email : String , 
    password: String ,
    location : String,
    DOB : String
}
);
const UserModel = mongoose.model("users" , UserSchema);

module.exports =  UserModel;