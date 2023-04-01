const  User=require("../models/User_model");

module.exports={
    Getall(req,res,next){
        User.find({})
        .then((result)=>res.status(200).send(result))
        .catch(next)
    },
    GetbyId(req,res,next){
        const userid=req.params.id;
        User.findById({_id:userid})
        .then((result)=>res.status(200).send(result))
        .catch(next);
    },
    NewUser(req,res,next){
        const newuser=req.body;
        User.create(newuser)
        .then((result)=>res.status(200).send(result))
        .catch(next);
    },
    Update(req,res,next){
        const userid=req.params.id;
        const user=req.body;
        User.findByIdAndUpdate({_id:userid},user)
        .then(()=> User.findById({_id:userid}))
        .then((result)=>res.status(200).send(result))
        .catch(next);
    },
    Delete(req,res,next){
        const userid=req.params.id;
        User.findByIdAndRemove({_id:userid})
        .then(()=>res.status(204).send("User Deleted"))
        .catch(next);
    }
};