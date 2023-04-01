const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    UserName:{
        type:String,
        required:[true,'username required'],
        unique:true
    },
    phoneNum:{
        type:String
    },
    email:{
        type:String,
        required:[true,'email required']
    }
})

const usermodel=mongoose.model("User",UserSchema);


module.exports=usermodel;