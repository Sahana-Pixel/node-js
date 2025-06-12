
import express from 'express'

const app=express();


// when i enter name all that will be displayed in url 
// http://localhost:1000/?name=sahana&email= like this 
// for this we need to handle form 
// for this we need meddlewear that is url encode
// This is a built-in middleware in Express used to parse incoming request bodies with URL-encoded data, which is commonly sent through HTML forms.
app.use(express.urlencoded({extended:true}))

// so after submit button hit i have to know where the data goes
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/form-submit',(req,res)=>{
    console.log(req.body)
    // { name: 'Sahana S Acharya', email: 'sahanaacharyaaa85@gmail.com' }
    // this will be displayed
    // this will save data from to database
    res.json({
        message:"your form has been submitted",
        success:true
    })
})
// so when press submit it should come to form-submit route 
// here we can save data to db by post method
// to see what data user has storeed-> data is in express body
// everything cane be get to req.body


const port=1000
app.listen(port,()=>console.log(`server is running in port ${port}`))

