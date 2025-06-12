// creating server
import express from 'express'
import path from 'path'
const app=express();

// product array which has object in it
const products=[
    {title:'noodles',price:100},
    {title:'momos',price:150},
    {title:'manchurian',price:200},
]

// we need to give response now
// esponse will give in json
// send response
app.get('/',(req,res)=>{
    // whenever will give response will give in json
    // json formate key and value 
    // in this message is key and value is fetch all products
    // res.json({message:'fetch all products',
    //     products:products,
    //     success:true,
    // })
    // we can send html also
    // res.send('<h1>you are requested for home page</h1>')
    // to send html file we use path module
    // for that import path
    // join html with dir 
    const dir =path.resolve();
    const url=path.join(dir,'./index.html')

    res.sendFile(url)
})


const port=2000

app.listen(port,()=>console.log(`server is running on port ${port}`))