const express = require('express');
const server= express();
const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
const url='mongodb://127.0.0.1:27017';
var routes= require('./route/routes')
const cors= require('cors');
const bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(9992,function check(err){
    if(err)
    {
        console.log("error");
    }
    
    else
    {
        console.log("started")
    }
   
});
mongoose.connect(url+"/project", {useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error){
    if(error){
        console.log("error connecting db");
    }else{
        console.log("connected to db");
    }
});

server.use(express.json());
server.use(routes);

// module.exports = stripe;
