const mongoose= require("mongoose")
const express= require("express")
const cors=require("cors")
const app=express()
require("dotenv").config()
const router=require("./src/routes/userRoutes")
const port = process.env.PORT || 3000
const startDatabase = require("./src/config/db")
//middlewares
app.use(express.json());
app.use(cors())
app.use("/users", router)
app.use(express.urlencoded({extended: false}))

//connect
startDatabase()


//port
app.listen(port, ()=>{
    console.log(`server running on port${port}`)
})