const router = require('express').Router()

router.use("/api/auth",require("./userRouter"))

router.get('/',(req,res)=>{res.status(200).json({msg:"Deu certo"})})

module.exports = router