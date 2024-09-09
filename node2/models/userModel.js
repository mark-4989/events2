import mongoose from "mongoose"
 const clientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
    phone:Number,
    eventtype:String,
    siku :{
      type: String,
      match: /^\d{4}-\d{2}-\d{2}$/,
      required: true
    },
    guestcount:Number
 })

 // Define a pre-save middleware to format the date
 clientSchema.pre('save', function(next) {
   if (this.siku instanceof Date) {
       this.siku = this.siku.toISOString().split('T')[0];
   }
   next();
});

 const clientModel =mongoose.model("clientmodel",clientSchema)
 export default clientModel;