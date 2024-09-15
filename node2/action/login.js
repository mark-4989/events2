import mongoose, { Error } from "mongoose";
import  entrence from '../models/loginModel.js'
import bcrypt from 'bcrypt'
import authSchema from './valid.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import 'cookieparser'

export const getUser = async (req,res) =>{
  const {userName} = req.params
  // clientel.findById({id})
  try {
    if(!userName) return res.status(501).send({error:'invalid username'})
    const Clientel = await entrence.findOne({userName})
    res.status(200).json(Clientel)
  } catch (error) {
    res.status(404).json({message: error.message})
    console.log(error.message)
  }
}

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



export const actualLogin = async (req, res) => {
  const {userName,password} = req.body
  try {
    // Find one user based on username
    const user = await entrence.findOne({ userName: req.body.userName });
    
    if (!user) {
      return res.status(404).send("Username not found");
    }

    // Compare passwords
    const match = await bcrypt.compare(req.body.password, user.password);
    
    if (!match) {
      return res.status(401).send("Invalid password");
    }else{
 // console.log(process.env.ACCESS_TOKEN_SECRET)
//  const users = { userId: user._id, userName: user.userName }
 // Generate JWT token
 const token = jwt.sign({password: password},process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '20s' } );
 const refresh = jwt.sign({password: password},process.env.REFRESH_TOKEN,{expiresIn: '5m'})

 res.cookie('token',token,{maxAge: 7000}),
 res.cookie('refresh',refresh,{maxAge: 90000, httpOnly: true,secure:true,sameSite: 'strict'})

 // Send token in the response
 res.status(200).json({
   message: "Login successful",
   token: token
 });
    }
 
   
    // res.cookie('token',token,{maxAge: 70000})

  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during login");
  }
};


// export const actualLogin = async (req,res)=>{
// try {
//     const check = await entrence.findOne(req.body)
//     if(!check)
//         throw res.send("username cannot be found")
//     const pass = await bcrypt.compare(req.body,check.password)
//     if(pass)
//         throw res.send(console.log(Error))
        
// } catch (error) {
//     res.send(console.log(error))
//  }

// try {
//     const result = await authSchema.validateAsync(req.body);
//     res.send(result);
// } catch (error) {
//     if (error.isJoi === true) return next(Error.BadRequest);
//     // next(error);
//     res.send(console.log(error))
// }
// }