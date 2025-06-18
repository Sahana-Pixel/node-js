// route to handle url to make it short for that post is used
// inisde part of post will write in controller
// that part is left later to write

// User goes to / → Renders form (with shortUrl = null).
// User submits form → POST /short → Controller generates short URL.
// Controller calls res.render("index.ejs", { shortUrl })\\
//  → Same page shown, but with the result displayed.

// after that when i press that shortcode it should go to that link

import express from 'express'
import mongoose from 'mongoose';
import { getoriginalUrl, shortUrl } from './Controllers/url.js';

const app=express();

// through this i can get req.body


app.use(express.urlencoded({extended:true}))

// mongo db connection
mongoose.connect("mongodb+srv://sahana:sahana@cluster0.mz45cei.mongodb.net/",
    {dbName:"Nodejs_course"}
).then(()=>console.log("mongoDb Connected")).catch((err)=>console.log(err))




// Renders the form/page where the user inputs the long URL. Initially, there's no shortUrl, so it's null.

app.get('/',(req,res)=>{
    res.render('index.ejs',{shortUrl:null})
})

app.post('/short',shortUrl)

// dyanamic route 
// redirect to orginal url using shortcode 


app.get('/:shortCode',getoriginalUrl);


// /xyz987	/:shortCode
// :shortCode is a placeholder for any value that comes after the /
// That value is stored in req.params.shortCode

// port 
const port=2000
app.listen(port,()=>console.log(`server is running in port ${port}`))

