const mongoose = require("mongoose");
 const userModel= require("../models/user")

 const getAll=async function(req,res){
    try{
        const { title} = req.query

        const users= await userModel.find({
            title: {$regex: title || "", $options: "i"}
        })
fff
        if(!users===0){
            return res.status(404).json({
                data: [],
                status: "fail",
                message: "users not found"
            })
        }
        return res.status(200).json({
            data: users,
            status: "succes",
            message: "users founded"
        })

    }
    catch(error){
        res.status(401).json({
            status: "fail",
            message: error.mesage ? error.mesage : "external data error"
        })
    }
 }

//get one
 const getOne=async function(req,res){
    try{
     const {id}= req.params
        if(!id){
            return res.status(404).json({
                data: {},
                status: "fail",
                message: "id not found"
            })
        }

        const user= await userModel.findById(id)

        if(!user){
            return res.status(404).json({
                users: {},
                status: "fail",
                message: "user not found"
            })
        }
        
        return res.status(200).json({
            data: user,
            status: "succes",
            message: "user founded"
        })

    }
    catch(error){
        res.status(401).json({
            status: "fail",
            message: error.mesage ? error.mesage : "external data error"
        })
    }
 }

//post
const post = async function(req,res){
    const {imgUrl, title, description, country}=req.body

    if (!imgUrl || !title || !description || !country){
        return res.status(401).json({
            status: "fail",
            message: "all datas are required"
        })
    }

    const newUser=  new userModel({
        imgUrl, title, description, country
    })

    await newUser.save()

    return res.status(200).json({
        status: "success",
        message: "user posted!"
    })
}


const deleteOne=async function(req,res){
    try{
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id)

        if(!deletedUser){
            return res.status(404).json({
                status: "fail",
                message: "user not found"
            })
        }
        
        return res.status(200).json({
            status: "succes",
            message: "user deleted"
        })


    }

    catch(error){
        res.status(401).json({
            status: "fail",
            message: error.mesage ? error.mesage : "external data error"
        })
    }
}


 module.exports= {getAll, getOne, post, deleteOne}