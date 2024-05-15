const users=require('../models/userSchema')

const Jwt=require('jsonwebtoken')

const JwtSecret=process.env.JWTSECRET

// register
exports.registerController=async(req,res)=>{
    const{username,email,password}=req.body
    try {

        // check user already exists or not
        const userDetails=await users.findOne({email})

        if(userDetails){
            res.status(406).json("user already exists, please login!!!")
        }
        else{
            const newUser=users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

// login
exports.loginController=async(req,res)=>{

    const{email,password}=req.body

    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){

            const token=Jwt.sign({userId:existingUser._id},JwtSecret)

            res.status(200).json({existingUser,token})

        }
        else{

        }
    }
    catch(err){
        res.status(401).json(err)
    }
}