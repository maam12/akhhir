
const express = require("express")

const router = express.Router()

const blogController  =  require("../Controller/BlogController")


router.route("/blog").get(blogController.blog)




router.route("/blog/:id").get(blogController.onblog)




router.route("/blog").post(blogController.post)



router.route("/blog/:id").put(blogController.editblog)


router.route("/blog/:id").delete(blogController.delete)

module.exports =  router