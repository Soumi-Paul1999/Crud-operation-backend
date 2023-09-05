const userRoutes = require("../routes/userRoutes");
const UserModel = require("../models/UserModel");

exports.createUser = async (req,res)=>{
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
      const user = await UserModel.find({})
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getUser = async(req,res)=>{
    try {
        const id = req.params.id;
      const user = await UserModel.findById({_id:id})
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const id = req.params.id;
     const user = await UserModel.findByIdAndUpdate({_id : id} ,{name:req.body.name , email: req.body.email, age: req.body.age})
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete({_id:id})
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}