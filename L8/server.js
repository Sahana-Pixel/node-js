// to make server and routing in express.js
// in node http weere used to create server

import express from 'express'

// call as function
// based on this app the name will be used further
const app=express();


// also will learn routing 
app.get('/',(req,res)=>{
    res.send("you are requested for home route")
})

app.get('/contact',(req,res)=>{
    res.send("you are requested for contact page")
})


// port 
const port=2000
app.listen(port,()=>console.log(`server is running in port ${port}`))

