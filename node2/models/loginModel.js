import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const LoginSchema = new mongoose.Schema({
    userName:String,
    password:String
}) 
// hashing password,install a bcrypt package
LoginSchema.pre("save", async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPwd = await bcrypt.hash(this.password, salt);
      this.password = hashedPwd;
      next();
    } catch (error) {
      next(error);
    }
  });

const loginModel = mongoose.model('loginSchema',LoginSchema);
export default loginModel;