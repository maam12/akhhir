



const express = require("express")

const router = express.Router()

const CommentController = require("../Controller/CommnetController")



router.route("/commnete").get(CommentController.coommnet)




router.route("/commnete/:id").get(CommentController.oncoommnet)




router.route("/commnete").post(CommentController.postcoommnet)



router.route("/commnte/:id").put(CommentController.editcoommnet)


router.route("/commnete/:id").delete(CommentController.deletecoommnet)

module.exports =  router