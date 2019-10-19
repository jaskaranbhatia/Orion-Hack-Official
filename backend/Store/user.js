const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

router.put('/' , async (req , res)=>{
    try{
    const data = await UserModel.findOne({"name": req.body.name});
    if(data)
    {
            data.email = req.body.email , 
            data.password= req.body.password ,
            data.location = req.body.location ,
            data.disease = req.body.disease
            
    }
    data.save();
}
catch(e)   
    {console.log(e);}
}
);

router.post('/' , (req , res)=>{
            var data = new UserModel({
            name: req.body.name,
            email : req.body.email , 
            password: req.body.password ,
            location : req.body.location ,
            disease : req.body.disease
            
    });
    data.save();
}
);

router.get('/:name' , async (req , res)=>{
    try{
    const id = await UserModel.findOne({"name":req.params.name});
    res.json(id);
}
catch(e)
{
    console.log(e)}
}
);


router.post('/login', async (req , res)=>
{
    try {
        const exist = await UserModel.findOne({"email" : req.body.email});
        if(exist)
        {
            if(exist.password === req.body.password)
            {
    
                const payload = {
                    name : exist.name , 
                    email : exist.email
                }
                jwt.sign(payload , "Jwt-pbvt-dslkjjflk" , {expiresIn : 36000} , (err , token) => {
                    res.json({
                        success : true ,
                        token : 'Bearer ' + token
                    })
                })
            }
            else
            res.json({"message": "Invalid Email or Password"});  // research
        }
    }
    catch(e) {
        console.log(e);
    }
}
);





module.exports = router;