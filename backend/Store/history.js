const express = require('express');
const router = express.Router();
const HistoryModel = require('../models/History');

router.post('/' ,async (req , res)=>{
    try{
    const data = await HistoryModel.findOne({"name" : req.body.name});
    console.log(data);
    if(data)
    {   
        data.date = [...data.date , req.body.date];
        data.symptom = [...data.symptom , req.body.symptom];
        data.bmi = [...data.bmi , req.body.bmi];   
        data.save();         
    }

    else {
        const data = new HistoryModel({
            name : req.body.name,
            date : req.body.date , 
            symptom: req.body.symptom ,
            bmi : req.body.bmi 
        });
        data.save();
    }
}
catch(e)
{console.log(e)}
}
);

router.get('/:name' , async (req , res)=>{
    try{
    const id = await HistoryModel.findOne({"name":req.params.name});
    res.json(id);
}
catch(e)
{
    console.log(e)}
}
);
module.exports = router;