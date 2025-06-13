import mongoose from "mongoose";

// for creating models we use mongooes
// any _ schema
const userSchema= new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    phone:{type:Number},
    age:{type:Number},
    createdAt:{
        type:Date,
        // default automatically takkes
        default:Date.now
    }
    
})
export const User=mongoose.model("user",userSchema)
// so model name will be user 