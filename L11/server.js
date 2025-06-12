// template engine
// if i want to chnage something from html we need template engine
// e.js html code in js can be used embedded js this are template engine 
// we need to install ejs
// to use ejs we need to folder views
// to send that response we use res.render
// to send this has response 
// html => res.send
// html file => res.sendfile
// json => res.json
// ejs => res.render

// in ejs we use <% %> inside this we write js

// step for ejs 
// 1.instll ejs => npmi ejs
// 2.make folder views
// 3.do filde inside it with index.ejs(will write all html here)

// server
import express from 'express'
import path from 'path'

const app =express();
// to consider css ststic file w need path 
// middleware act as bride 
// express and static file is joined by middleware this middleware in express is express static file
// it means normal css reads ejs
// also we need to make another folder called public 
// from that folder the css file should exist
// public folder will be static folder
// we have to join with that folder 
// path.resolve will get address of current folder
// this is how css is used in ejs steps needde to be followed
// this server side erndering html file
app.use(express.static(path.join(path.resolve(),'public')))


const products = [
    { title: 'noodles', price: 100 },
    { title: 'momos', price: 150 },
    { title: 'manchurian', price: 200 },
];

// route
app.get('/',(req,res)=>{
    // this will automatically detect view folder 
    // we dont have to do any path for it 
    // now i want to pass my name to index.ejs 
    let name="MENU"
    // now if i have array 
     res.render('index.ejs',{name,products})

    
})



const port=1000;
app.listen(port,()=>console.log(`server is running in port ${port}`))