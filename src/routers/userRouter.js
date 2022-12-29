const router = require('express').Router()
const UserController = require("../controllers/UserController")


const validate = require("../middlewares/handleValidation")

router.post("/users/register", validate ,UserController.register)

module.exports = router