import Joi from "joi";
const authSchema = Joi.object({
    userName: Joi.string().lowercase().required(),
    password: Joi.string().min(8).required(),
});
export default  authSchema ;