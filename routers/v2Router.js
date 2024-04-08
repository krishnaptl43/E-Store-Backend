const express = require('express')
const adminRouter = require('./adminRouter/adminRouter')
const router = express.Router()

router.use("/admin",adminRouter)

module.exports = router;