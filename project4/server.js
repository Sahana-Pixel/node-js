// api will response in json formate, no index.ejs will not be used
// that can be used in any framweork
// but if we use ejs then we cannot use react or anything 

// data bhejte hain /api/user/register naming convention
// api desc :-user register
// api methos :- post
// api endpoint :- /api/user/register
// name email comes from req.body
    // so where the data will come has there is no frontend 
    // this data will come from postpone
    // this is api testing to test the below one 
    // from there i am sending data express donno that i am sending json data 
    // to parse i need bodyParser


//     const hashedPassword = await bcrypt.hash(password, 10);

// let user = await User.create({
//   name,
//   email,
//   password: hashedPassword
// });


import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import { register } from './Controllers/user.js';

const app=express();


app.use(bodyParser.json())


// home route
// http://localhost:2000/ if i do this in thunder i will get the response
app.get('/',(req,res)=>{
    res.json({message:"this is home route"})
})

// user route

// app.post('/api/user/register',register)
// api/user will be fixed rest will go to userRegister based on the route
app.post('/api/user',register)

mongoose.connect("mongodb+srv://sahana:sahana@cluster0.mz45cei.mongodb.net/",
    {dbName:"Nodejs_course"}
).then(()=>console.log("mongoDb Connected")).catch((err)=>console.log(err))





// port 
const port=2000
app.listen(port,()=>console.log(`server is running in port ${port}`))

