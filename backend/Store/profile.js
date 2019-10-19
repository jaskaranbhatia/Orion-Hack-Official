const profileModel = require('../models/Profile');
const express = require('express');
const router = express.Router();

router.put('/' , async (req , res)=>{
    try{
        const data = await profileModel.findOne({"name": req.body.name});
        if(data)
    {       
            data.name = req.body.name,
            data.age =req.body.age , 
            data.heigth = req.body.heigth,
            data.weight = req.body.weight,
            data.identificationMarks = req.body.identificationMarks,
            data.BloodGroup = req.body.BloodGroup
            
    }
    data.save();
}
    catch(e)
    {console.log(e)};
    
}
);


router.post('/' , async (req , res)=>{
    try{
    const id = await profileModel.findOne({"name":req.body.name})._id;
        var data = new profileModel({
            id : id,
            name : req.body.name,
            age: req.body.age , 
            heigth : req.body.heigth,
            weight : req.body.weight,
            identificationMarks : req.body.identificationMarks,
            BloodGroup : req.body.BloodGroup
        });
            
            data.save();
}
catch(e)            
{console.log(e)}
}
);

router.get('/:name' , async (req , res)=>{
    try{
    const id = await profileModel.findOne({"name":req.params.name});
    res.json(id);
}
catch(e)
{
    console.log(e)}
}
);

module.exports = router;


