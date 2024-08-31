import mongoose from "mongoose";
import  entrence from '../models/loginModel.js'

export const createLogin = async (req,res)=>{
    const data ={
        userName: req.body.userName,
        password:req.body.password
    }
    const newP = new entrence(data)
try {
    await newP.save();
   console.log(newP) 
} catch (error) {
    // res.status(409).json({message: error.message}) 
    res.send(console.log(error))
}
}