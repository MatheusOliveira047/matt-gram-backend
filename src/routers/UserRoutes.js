const router = require('express').Router()
const {register,login,getCurrentUser} = require("../controllers/UserController")


const validate = require("../middlewares/handleValidation")
const {userCreateValidation,loginValidation} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

router.post("/register", userCreateValidation(), validate, register);
router.post('/login', loginValidation(),validate,login)
router.get('/profile', authGuard,getCurrentUser)

module.exports = router