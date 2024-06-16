import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";
import connectdb from "./db/index.js";

//approach 2
//new file dbconnect
dotenv.config({
    path:'./env'
})//env cofiguration


connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        CSSConditionRule.log(`serve unnning at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection failed")
})











//approach 1
// import express from "express";
// const app= express()


// ;(async()=>{
// try {

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
// console.log(`error:${error}`);
// throw error
// })
// app.listen(process.env.PORT,()=>{{
//     console.log(`app listening on port ${process.env.PORT}`)
// }})
// }
// catch(error){
//     console.error('error:',error)
//     throw err
// }
// })()