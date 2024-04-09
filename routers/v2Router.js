const express = require('express')
const adminRouter = require('./adminRouter/adminRouter')
const authRouter = require('./authRouter/authRouter')
const router = express.Router()

router.use("/admin",adminRouter)
router.use("/auth",authRouter)

module.exports = router;