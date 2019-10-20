const  mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
{
    id : String,
    name : String,
    date : [String] ,
    symptom : [String] , 
    disease : [String] ,
    bmi : [Number],
}
);
const HistoryModel = mongoose.model("history" , HistorySchema);
 
module.exports = HistoryModel;