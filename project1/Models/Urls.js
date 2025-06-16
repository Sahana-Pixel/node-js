
// i need to keep 2 thisng longurl and the code

import mongoose from "mongoose";

const urlSchema= new mongoose.Schema({
    shortCode:String,
    longUrl:String
})

export const Url=mongoose.model("shortURL",urlSchema)