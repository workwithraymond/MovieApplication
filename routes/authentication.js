const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')


router.get("/admin", adminController.isAdmin)
router.get("/admin/signup", adminController.signup)
router.post("/admin/signup", adminController.admin)
router.get("/admin/login",adminController.newLogin)
router.post("/admin/login", adminController.AdminUser)
router.get("/admin/logout", adminController.userLogout)


module.exports=router;