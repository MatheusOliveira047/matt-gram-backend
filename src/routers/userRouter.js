const router = require('express').Router()
const UserController = require("../controllers/UserController")

router.post("/users/register",UserController.register)

module.exports = router