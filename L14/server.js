// this model views connect MVC
// to set data from form
// npm init -y
// npm i express mongoose ejs

// in mongodb databse is there will save there 
// as i want to save name email and all that is we are saying to db that is model
// create models folder as i want to define each column with its name to store data

import express from 'express'
import mongoose from 'mongoose';
import { User } from './Models/User.js';
import { userRegister } from './controllers/user.js';
// through model only i can save data to db
// User this come from export in model
// there are method in mongoose


const app=express();
app.use(express.urlencoded({extended:true}))

// will give dbname here
mongoose.connect("mongodb+srv://sahana:sahana@cluster0.mz45cei.mongodb.net/",
    {
        dbName:"Nodejs_course"
    }
).then(()=>console.log("mongoDb Connected")).catch((err)=>console.log(err))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

// when i put data after submit where it should go that rout we need to do
// through post we save data in db
app.post('/form-submit',userRegister)
// async(req,res)=>{
//     // create through i can create data user. is a method
//     try{
//         let user= await User.create(req.body)
//          res.json({message:"User created successfully",
//             NewUser:user,
//             success:true,})
//     }catch(error){
//         res.json({message:error.message})
//     }
// the user there will have all the data 
// so now wt is controller 
// controller mean fucntion
// inisde app.post we wrote here we wont write here we write in controllers

    // our data come from req.body
//     console.log(req.body)
//     res.json({message:"your form submitted",
//         success:true,
// })
// })



// port 
const port=2000
app.listen(port,()=>console.log(`server is running in port ${port}`))

