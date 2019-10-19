const express = require('express');
const app = express();
const body = require('body-parser');
const mongoose = require('mongoose');
const history = require('./Store/history');
const profile = require('./Store/profile');
const user = require('./Store/user');

mongoose.connect("mongodb://localhost/orion" , {newUrlParser : true})
 .then(()=>console.log("Succefully connected to mongoDB"))
 .catch(()=>console.log("Falied to connect to mongoDB"));

 app.use(body.json());
 app.use(body.urlencoded());
 app.use('/history', history);
 app.use('/profile', profile);
 app.use('/user', user);
 app.listen(4000 , ()=>console.log("ServerUp"));