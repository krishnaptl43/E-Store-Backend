const express = require('express')
const router = express.Router()
const v1Router  = require("./v1Router")

router.use('/v1',v1Router)
// router.use('/v2',(req,res,next)=>{
//     next()
// })

// router.use("/v2",v2Router)

module.exports = router;