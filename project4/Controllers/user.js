import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs'

export const register=async(req,res)=>{
    const {name,email,password}= req.body
    
    // if this is true then after that no line will be executed it will return  back 
    if(name == "" || email == "" || password == "") 
        return res.json({message:"All fields are required"})

    // before registering user check already user exist
    let user= await User.findOne({email})
    if(user)
        return res.json({
                    message:"user already exist",
                    success:false
                })
    
    // saving password encrypt from hasing them 

    const hashPassword =await bcrypt.hash(password,10)

    // if the condition is false then
     user=await User.create({
        name,email,
        password:hashPassword
    })


    res.json({message:"user created successfully",
        // good practice to do this
        success:true,
        user:user,
    })
}