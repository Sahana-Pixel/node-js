import shortid from "shortid"
import { Url } from "../Models/Urls.js"

export const shortUrl= async (req,res)=>{
    // to short url i need to generate ID we need to install shortid 
    const longUrl=req.body.longUrl
    const shortCode=shortid.generate()
    // after deploying this will change  http://localhost:3001
    const shortUrl=`http://localhost:2000/${shortCode}`

    console.log("short saved=",shortUrl)
    // save to db
    // for which longUrl shortcode is saved
    const newUrl=new Url({shortCode,longUrl})
    await newUrl.save()
    // in db there is also save method

    console.log("short saved=",newUrl)
    res.render("index.ejs",{shortUrl})
}

// when short url is hitted getoriginalUrl has to be called
export const getoriginalUrl =async(req,res)=>{
    console.log("i am here")
    // code to find in db
    // just like req body there is re.parm for url localhost,,/shohrtcode 
    // to got the shortcode we do req.parm
    // http://localhost:3000/abc123       req.params.shortCode === 'abc123' 
    const shortCode =req.params.shortCode
    // find o db 
    const originalUrl= await Url.findOne({shortCode})
    if(originalUrl)
    {
        res.redirect(originalUrl.longUrl)

    }
    else
    {
        res.json({message:"invalid shortcode"
    })
    }
    
}