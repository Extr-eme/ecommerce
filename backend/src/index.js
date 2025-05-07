import express from "express";
import 'dotenv/config'
import { StatusCodes } from "http-status-codes";



const app=express();
const PORT= process.env.PORT;
app.get('/',(req,res)=>{
    res.status(StatusCodes.OK).json({message:"Welcome to my app"})
});

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});