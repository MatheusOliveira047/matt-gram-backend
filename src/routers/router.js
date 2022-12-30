const express = require('express')
const router = express()


// users
router.use("/api/users", require("./UserRoutes"))

//photos
router.use("/api/photos", require("./PhotoRoutes"))

router.get('/',(req,res)=>{res.status(200).json({msg:"Deu certo"})})

module.exports = router;