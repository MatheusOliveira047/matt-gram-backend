const router = require('express').Router()

router.get('/',(req,res)=>{res.status(200).json({mmsg:"Deu certo"})})

module.exports = router