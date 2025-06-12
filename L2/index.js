console.log("Modules")

// 1. many function diffrent files it saved 
// those function are immported 
// this are pasted to utils.js
// const sub = (a,b) => a+b;
// const mul = (a,b) => a*b;

// 4.to use import go to package.json
// type:module
// 3.to import from other file
// const {sub, mul} =require("./util")

// 5. import 
import {sub, mul} from './util.js'

console.log("sub number",sub(2,1));