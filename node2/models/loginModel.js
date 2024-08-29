import mongoose, { Schema } from "mongoose";

const LoginSchema = new mongoose.Schema({
    userName:String,
    password:String
}) 

const loginModel = mongoose.model('login',LoginSchema)
export default loginModel;