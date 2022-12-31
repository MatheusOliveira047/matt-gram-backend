const Photo = require("../models/Photo")
const User = require("../models/User")
const mongoose = require("mongoose")

const insertPhoto = async(req,res)=>{

  const {title} = req.body 
  const image = req.file.filename

  const reqUser = req.user 

  const user = await User.findById(reqUser._id)

  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name
  })

  if(!newPhoto){
    res.status(422).json({errors:["Houve um problema, tente mais tarde."]})
    return
  }

  return res.status(201).json(newPhoto)
}

const deletePhoto = async(req,res)=>{

  const {id} = req.params

  const reqUser = req.user

  try {
    
    const photo = await Photo.findById(mongoose.Types.ObjectId(id))
    
    if(!photo){
      return res.status(404).json({errors:["Foto não encontrada"]})
    }
    if(!photo.userId.equals(reqUser._id)){
     return res.status(422).json({errors:['Ocorreu um erro, por favor tente novamente mais tarde']})
    }
    await Photo.findByIdAndDelete(photo._id)
    return res.status(200).json({id:photo._id, message:"Foto excluída com sucesso."})
  } catch (error) {
    return res.status(404).json({errors:["Foto não encontrada"]})
  }
}

const getAllPhotos = async (req,res)=>{
  const photos = await Photo.find({}).sort([["createdAt",-1]]).exec()

  return res.status(200).json(photos)
}

const getUserPhotos = async (req,res)=>{
  const {id} = req.params

  const photos = await Photo.find({userId: id}).sort([['createdAt', -1]]).exec()

  return res.status(200).json(photos)


}

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos
}