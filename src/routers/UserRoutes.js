const router = require('express').Router()
const {register,login,getCurrentUser,update} = require("../controllers/UserController")


const validate = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUploads")
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation
} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

router.post("/register", userCreateValidation(), validate, register);
router.post('/login', loginValidation(),validate,login)
router.get('/profile', authGuard,getCurrentUser)
router.put("/",authGuard,userUpdateValidation(),validate, imageUpload.single("profileImage"),update)

module.exports = router