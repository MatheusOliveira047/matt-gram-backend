const router = require('express').Router()

// Controllers
const {
  register,
  login,
  getCurrentUser,
  update,
  getUserById
} = require("../controllers/UserController")

// middlewares
const validate = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUploads")
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation
} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

// routes
router.post("/register", userCreateValidation(), validate, register);
router.post('/login', loginValidation(),validate,login)
router.get('/profile', authGuard,getCurrentUser)
router.put("/",authGuard,userUpdateValidation(),validate, imageUpload.single("profileImage"),update)
router.get("/:id",getUserById)

module.exports = router