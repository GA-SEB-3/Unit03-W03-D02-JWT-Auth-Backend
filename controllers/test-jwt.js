const router = require("express").Router()

router.get("/sign-token",(req,res)=>{

    res.json({message:"Route successful"})
})

module.exports = router