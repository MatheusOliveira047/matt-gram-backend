const router = require('express').Router()

router.get('/',(req,res)=>{res.status(200).json({msg:"Deu certo"})})

module.exports = router