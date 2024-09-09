import Joi from "joi";
import crypto from 'crypto'
const authSchema = Joi.object({
    userName: Joi.string().lowercase().required(),
    password: Joi.string().min(8).required(),
});

// const jwtSecret = crypto.randomBytes(32).toString('hex');
// console.log(jwtSecret);

export default  authSchema ;