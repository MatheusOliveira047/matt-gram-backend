const express = require('express')
const router = express()

router.use("/api/users", require("./UserRoutes"))

router.get('/',(req,res)=>{res.status(200).json({msg:"Deu certo"})})

module.exports = router;