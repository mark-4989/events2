import mongoose, { Error } from "mongoose";
import  entrence from '../models/loginModel.js'

export const createLogin = async (req,res,next)=>{
    const data ={
        userName: req.body.userName,
        password:req.body.password
    }
    // const register = new entrence(data);
    // const Exist = await entrence.findOne({ userName:data.userName });
    // try {
    
    //     // const result = await authSchema.validateAsync(req.body);
       
    //     if (Exist)
    //         throw Error.Conflict(`${data.userName}is already been registerd`);
    //     const user = new register(result);
    //     const accessToken = await signAnAccessToken(savedUser.id);
    //     const saved = await user.save();

    //     res.send({ accessToken });
    // } catch (error) {
    //     if (error.isJoi === true) error.status = 422;
    //     next(error);
    // }
    const newP = new entrence(data)
     const exist = await entrence.findOne({userName:data.userName})
try {
    // checking if user exist

    if(exist){
       
        res.send(console.log("user already exist"))
    }else{
        await newP.save();
        console.log(newP)
    }
 
} catch (error) {
    // res.status(409).json({message: error.message}) 
    res.send(console.log(error))
}
}