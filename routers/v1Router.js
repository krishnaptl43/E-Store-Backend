const express = require('express')
const router = express.Router()
const userRouter = require("./userRouter/userRouter")

router.use('/user',userRouter)


module.exports = router;