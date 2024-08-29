import mongoose, { Schema } from "mongoose";

const LoginSchema = new mongoose.Schema({
    userName:String,
    password:String
}) 

const loginModel = mongoose.model('loginModel',LoginSchema)
export default loginModel;