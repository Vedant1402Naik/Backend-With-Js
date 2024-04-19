// require('dotenv').config({path:'./env'})
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT)
})
.catch((err)=>{
    console.error('MongoDB Connection Failed',err)
})

/*
const app = express()
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error : "+error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port : ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Eroor : " + error );
        throw error
    }
})()
*/
