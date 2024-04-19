const express = require('express')
const router = express.Router()
const userRouter = require("./userRouter/userRouter")
const { getAllProduct } = require('../controller/productController')

router.use('/user',userRouter)
router.get("/get_all_product",getAllProduct)

module.exports = router;