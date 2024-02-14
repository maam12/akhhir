
import express from "express"
import { loginuser, registerUser } from "../controller/userController.js"

const router = express.Router()


router.post("/registar" , registerUser)

router.post("/login" , loginuser)





export default router