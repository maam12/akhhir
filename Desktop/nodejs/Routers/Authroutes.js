const express = require("express")

const router = express.Router()

const authcontroller = require("../Controller/AuthController")



router.route("/login").post(authcontroller.login)




router.route("/signup").post(authcontroller.signup)


module.exports = router