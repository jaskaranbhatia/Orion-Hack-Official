const express = require('express');
const app = express();
const body = require('body-parser');
const mongoose = require('mongoose');
const history = require('./Store/history');
const profile = require('./Store/profile');
const user = require('./Store/user');

mongoose.connect("mongodb://karan:karan123@ds337418.mlab.com:37418/orion" , {newUrlParser : true})
 .then(()=>console.log("Succefully connected to mongoDB"))
 .catch(()=>console.log("Falied to connect to mongoDB"));

 app.use(body.json());
 app.use(body.urlencoded());
 app.use('/history', history);
 app.use('/profile', profile);
 app.use('/user', user);
 const port = process.env.PORT || 4909;
 app.listen(port , ()=>console.log("ServerUp"));