const express = require('express')
const router = express.Router()
const v1Router  = require("./v1Router")
const v2Router = require('./v2Router')
const { registerAdmin, loginAdmin } = require('../controller/adminController')
const { verifyToken } = require('../config/tokenManager')
const ApiResponse = require('../ApiResponse/apiResponse')

router.use('/v1',v1Router)
router.post("/admin/register",registerAdmin)
router.post("/admin/login",loginAdmin)
router.use("/v2",v2Router)

module.exports = router;