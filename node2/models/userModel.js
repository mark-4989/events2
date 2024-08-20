const mongoose = require('mongoose')
 const clientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
    phone:Number
 })
 const clientModel =mongoose.model("user",clientSchema)
 module.exports=clientModel