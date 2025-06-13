
import express from 'express'
import mongoose from 'mongoose';
// there are method in mongoose


const app=express();

// will give dbname here
mongoose.connect("mongodb+srv://sahana:sahana@cluster0.mz45cei.mongodb.net/",
    {
        dbName:"Nodejs course"
    }
).then(()=>console.log("mongoDb Connected")).catch((err)=>console.log(err))
app.get('/',(req,res)=>{
    res.send("you are requested for home route")
})



// port 
const port=2000
app.listen(port,()=>console.log(`server is running in port ${port}`))

