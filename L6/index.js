// if the user press anything that conent has to display
console.log("routing in node js")

// server
import http from 'http'

const server = http.createServer((req,res)=>{
    // when requested from user all the detail would come 
    console.log(req)
    // url user hit /hello
    console.log(req.url)
// res.end('<h1>Your request has been accepted</h1>')
if(req.url === '/home'){
    res.end('<h1>you are requested for home page</h1>')
}
else if(req.url === '/contact'){
    res.end('<h1>you are requested for contact page</h1>')
}
else{
    res.end('<h1>Invalid route</h1>')
}
})

const port=1000;
server.listen(port,()=>console.log(`server is running on port ${port}`))
