const User = require("../models/User")

const router = require("express").Router()
const bcrypt = require("bcrypt")

router.post("/sign-up",async(req,res)=>{
    try{
        const foundUser = await User.findOne({username:req.body.username})
        
        if(foundUser){
            return res.status(409).json({err:"username already taken"})
        }
        const createdUser = await User.create({
            username:req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.password,12)
        })
        console.log(createdUser)

        delete createdUser.hashedPassword
        const {username,_id} = createdUser
        res.json({username,_id})

    }
    catch(error){
        res.status(500).json(error)
    }

})

router.post("/login",(req,res)=>{

})




module.exports = router