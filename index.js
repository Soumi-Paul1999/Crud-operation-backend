const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require("./models/Users")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://soumihih7:1234@cluster0.wpdmsfy.mongodb.net/crud")

app.post("/createUser", (req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=> res.json(err))
})


app.get("/", (req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id : id} ,{name:req.body.name , email: req.body.email, age: req.body.age})
    .then(users=>req.json(users))
    .catch(err=> res.json(err))
})

app.delete("/deleteUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>req.json(users))
    .catch(err=> res.json(err))
})

app.get("/", (req, res) =>
  res.send("Server Running Successfully!")
);

app.listen(3001, ()=>{
    console.log("Server is running on the port http://localhost:3001")
})