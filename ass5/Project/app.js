const express = require("express");
const mongoose = require("mongoose");
const Port = process.env.PORT || 5000;
const userroutes = require("./routes/user_route");
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.use(express.json());
app.use("/user", userroutes);


app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
  })



app.listen(Port, (err) => {
    if (!err) return console.log("Server connect successfuly :))");
    console.log(err);
  });