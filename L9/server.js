// CRUD
// create read update delete

// createing server
import express from 'express'

const app=express();

// C = Create => POST (method) , posting pic in instagram
// R = Read => GET (method) , to see posts in instagram
// U = Update => PUT (method) , modifiying
// D = Delete => DELETE (method) , delete post in instagram
// to do create and all get method is used
// method
app.get('/get',(req,res)=>{
    res.send("get request")
})
// if i want to send data then post
app.post('/post',(req,res)=>{

})

const port=2000;
app.listen(port,()=>console.log(`server is running on port ${port}`))