// cloudinary is provide free storage to store image 
// will upload that image in cloudinary and from that will get image url
// also install multer to upload and in cloudinary to save npm i multer
// then install cloudinary npm i cloudinary
// in npm -> multer -> method to upload file
// __________________________________________________________________________________________
// ************  UPLOADING FILE ****************************
// Accept a POST request with one file (from field named avatar), save it to disk, then handle it in the function using req.file and req.body
// req.file.path  -> name=file and path give comlete address
// save it to mongo and cloudinary

// url in cloudinaryRes -> store in mongo
// public id in cloudinaryRes - used to delete or update image

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
    res.render("index.ejs",{url:null})
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

const imageSchema = new mongoose.Schema({
    filename:String,
    public_id:String,
    imgUrl:String
})

const File= mongoose.model("cloudinary",imageSchema)


 

// after uploading i need to keep somewhere -> disk storage
app.post('/upload', upload.single('file'), async (req, res)=> {
    const file=req.file.path
    // Upload an image
     const cloudinaryRes = await cloudinary.uploader
       .upload(
           file,{
            folder:"Nodejs"
           }
       )
       .catch((error) => {
           console.log(error);
       });
       
    //    save to db
    const db =await File.create({
        filename:file.originalname,
        public_id:cloudinaryRes.public_id,
        imgUrl:cloudinaryRes.secure_url,
        


    })
    res.render("index.ejs",{url:cloudinaryRes.secure_url})
    
    // res.json({message:"file uploaded",cloudinaryRes})

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

   









const port=2000;
app.listen(port,()=>console.log(`server is running on port ${port}`))