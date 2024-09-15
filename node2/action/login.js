import mongoose, { Error } from "mongoose";
import  entrence from '../models/loginModel.js'
import bcrypt from 'bcrypt'
import authSchema from './valid.js'
import jwt from 'jsonwebtoken'
import otp from  'otp-generator';
import 'dotenv/config'
import 'cookieparser'

// export const getUser = async (req,res) =>{
//   const {userName} = req.params
//   // clientel.findById({id})
//   try {
//     if(!userName) return res.status(501).send({error:'invalid username'})
//     await entrence.findOne({userName}).exec()
//   // if(err) return res.status(500).send({err})
//     if(!user) return res.status(501).send({error:'could not find user'})

//       const {password, ...rest}= Object.assign({},user.toJson());


//     res.status(200).json(rest) 
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(404).json({message: error.message})
//     console.log(error.message)
//   }
// }

export const getUser = async (req, res) => {
  const { userName } = req.params;

  try {
    if (!userName) {
      return res.status(501).send({ error: 'Invalid username' });
    }

    const user = await entrence.findOne({ userName }).lean();

    if (!user) {
      return res.status(501).send({ error: 'Could not find user' });
    }

    const { password, ...rest } = Object.assign({},user);

    res.status(200).json(rest);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(404).json({ message: error.message });
  }
};


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

// updateing
// export const updateProfile= async (req, res) => {
 
//   const id = req.params.id
//   entrence.findByIdAndUpdate({_id : id}, req.body)
//   .then(res => res.json(res))
//   .catch(err => res.json(err))

// };

export const updateProfile = async (req, res) => {
  const id = req.params.id;

  // Check if id exists and is valid
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const updatedProfile = await loginSchema.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(updatedProfile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// otp generation
export const otpgen = async ( req,res )=>{
  req.app.locals.OTP = await otp.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
  res.status(201).send({code:req.app.locals.OTP})
}

// otp veryfication
export const otpvery = async ( req,res )=>{
 const {code} = req.query;
 if(parseInt(req.app.locals.OTP) === parseInt(code)){
  req.app.locals.OTP = null;//reset otp value
  req.app.locals.resetSession = true ; //starting reset session
  return res.status(200).send({msg: "verify succesfull"})
 }
 return res.status(400).send({msg: "invalid otp"})

}

// reset password session
export const sess = async (req,res) =>{
if(req.app.locals.resetSession){
  req.app.locals.resetSession = false; 
  return res.status(201).send({msg: "access granted"})
}
return res.status(440).send({msg: "session expired"})

}

// update password
// export const upsess = async (req,res) =>{
// try {
//   if(!req.app.locals.resetSession){return res.status(440).send({ error:"session expired"})}
//   else{
//     const {userName , password} = req.body;

//     entrence.findOneAndUpdate({userName})
//    req.app.locals.resetSession = false;
    
//   }
  
// } catch (error) {
//   console.error(error);
//   res.status(500).send("An error occurred during update");
// }
//   } 

 // Assuming you have a User model

export const updatePassword = async (req, res) => {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: "Old password and new password are required" });
    }

    const user = await entrence.findOne({ username: req.app.locals.resetSession.userName });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(oldPassword, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid old password" });
    }

    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    await entrence.updateOne({ _id: user._id }, { password: hashedNewPassword });

    req.session.user = { ...req.app.locals.resetSession, password: hashedNewPassword };

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during password update" });
  }
};


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