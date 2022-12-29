const router = require('express').Router()
const {register} = require("../controllers/UserController")


const validate = require("../middlewares/handleValidation")
const {userCreateValidation} = require("../middlewares/userValidations")

router.post("/users/register", userCreateValidation() , validate , register)

module.exports = router