const mongoose = require('mongoose')
 const clientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
    phone:Number,
    eventtype:String,
    siku:Date,
    guestcount:Number
 })
 const clientModel =mongoose.model("user",clientSchema)
 module.exports=clientModel