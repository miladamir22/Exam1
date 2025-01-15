const mongoose= require("mongoose")
const userSchema = require("../schemas/user")


const userModel= mongoose.model("userModel",userSchema)

module.exports=userModel
