const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT

// GENERETE USER TOKEN
const genereteToken = (id)=>{
  return jwt.sign({id},jwtSecret,{
    expiresIn:"7d",
  })
}

// Register user and sign in 
const register = async(req,res)=>{
  const {name,email,password} = req.body

  const user = await User.findOne({email})

  if(user){
    res.status(422).json({errors:["Por favo, ultilize outro e-mail"]})
    return
  }

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password,salt)

  const newUser = await User.create({
    name,
    email,
    password:passwordHash
  })

  if(!newUser){
    res.status(422).json({errors:['Houve um erro, por favor tente mais tarde']})
    return
  }

  return res.status(201).json({
    _id: newUser._id,
    token: genereteToken(newUser._id),
  })

}


module.exports = {
  register,
}