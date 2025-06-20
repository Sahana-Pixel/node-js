// file upload ke time par i wwant to see register page
// when we rout either the pae will be render or 

import express from 'express'
import mongoose from 'mongoose';
import path from 'path'



const app=express();

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dztlr0ynt', 
        api_key: '231423465569768', 
        api_secret: 'NGa0FUw4_cZ4og8dgLoMc2B8eio' // Click 'View API Keys' above to copy your API secret
    });

    // method of multer -> uploading file




app.use(express.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://sahana:sahana@cluster0.mz45cei.mongodb.net/",
    {
        dbName:"Nodejs_course"
    }
).then(()=>console.log("mongoDb Connected")).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.render("login.ejs",{url:null})
})

app.get('/register',(req,res)=>{
    res.render("register.ejs",{url:null})
})

app.get('/login',(req,res)=>{
    res.render("login.ejs",{url:null})
})


const storage = multer.diskStorage({
    // store image in public/upload folder
//   destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + "-"  + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// model(database)
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    filename:String,
    public_id:String,
    imgUrl:String
})

const User= mongoose.model("registeruser",userSchema)


 

// after uploading i need to keep somewhere -> disk storage
app.post('/register', upload.single('file'), async (req, res)=> {

    // const file=req.file.path
    const { originalname, path } = req.file;
    // const name=req.body.name
    // const email=req.body.email
    // instead

    const {name,email,password}=req.body


    // Upload an image
     const cloudinaryRes = await cloudinary.uploader
       .upload(
           path,{
            folder:"Nodejs"
           }
       )
       .catch((error) => {
           console.log(error);
       });
       
    //    save to db (creating user)
    const db =await User.create({
        name,
        email,
        password,
        filename:originalname,
        public_id:cloudinaryRes.public_id,
        imgUrl:cloudinaryRes.secure_url,
        


    })
    res.redirect('/')
    // res.render("register.ejs",{url:cloudinaryRes.secure_url})
})

// .findOne({ email }): This searches for one document where the email field matches the given email variable.
app.post('/login',async(req,res)=>{
    const {email,password}= req.body
    let user= await User.findOne({email})
    if(!user)  res.render("login.ejs")
    else if(user.password!= password ) res.render('login.ejs')
    else {
        res.render('profile.ejs',{user})    
    }

})

   
const port=2000;
app.listen(port,()=>console.log(`server is running on port ${port}`))