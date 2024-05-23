const express = require('express');
const mongoose = require('mongoose');
const dotenv= require ("dontev");
dotenv.config();
const app=require("./app");
mongoose.connect(process.env.MONGOOB_URI,{
    useNewUrlParser:true,
    useUnifieldTopology:true
})
.then(()=> console.log("conectado con mongo"))
.catch(err=>console.log("no se conecto a mongo",err))
const PORT=process.env.port || 3000;
