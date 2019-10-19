const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
{
    id : String,
    name:String,
    email : String , 
    password: String ,
    location : String,
    disease : String,    // to finally sort acc to this to give the ranking of the most prevailing diseases in a area
}
);
const UserModel = mongoose.model("users" , UserSchema);

module.exports =  UserModel;