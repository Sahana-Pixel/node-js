// BUIDING SERVER
// node js says to keep server.js
// server means backend 
// to make server use http model
console.log("create server")


import http from 'http'

// there is method called createServer to create server, need to call that
const server = http.createServer((req,res)=>{

    // here user request 
    // localhost:1000 when requested from browser by user here i have to response it 
    res.end("you requested")
})

// those server runs in port 
const port = 3000;
// port and callback function
server.listen(port,() => console.log(`server is running at ${port}`));

// 2 things in server -> request , response 
// requesting -> asking information to give from server
// repsonse -> it checks in databse the info and gives back as response
// ()=> in js
// const sayHi = () => {
//   console.log("Hi!");
// }
// similar to this
// function sayHi() {
//   console.log("Hi!");
// }

