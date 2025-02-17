const router = require("express").Router()
const jwt = require("jsonwebtoken")

router.get("/sign-token",(req,res)=>{
    const user = {
        _id:1,
        name:"Loai"
    }

    // how to create a token
    const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"1h"})
    res.json({token:token})
})


router.post("/verify",(req,res)=>{
    console.log(req.headers.authorization.split(" ")[1])
    res.json({message:"Success"})
})

module.exports = router