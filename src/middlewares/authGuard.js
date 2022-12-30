const User = require("../models/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT

const authGuard = async (req,res,next)=>{

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if(!token) return res.status(401).json({errors:['acesso negado!!']})


  try {

    const virefied = jwt.verify(token, jwtSecret)

    req.user = await User.findById(virefied.id).select("-password")

    next()
  } catch (error) {
    res.status(401).json({errors:['token inválido']})
  }

}


module.exports = authGuard