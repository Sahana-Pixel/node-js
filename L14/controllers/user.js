// will do function here

import { User } from "../Models/User.js"

export const userRegister= async(req,res)=>{
    // create through i can create data user. is a method
    try{
        let user= await User.create(req.body)
         res.json({message:"User created successfully",
            NewUser:user,
            success:true,})
    }catch(error){
        res.json({message:error.message})
    }
}