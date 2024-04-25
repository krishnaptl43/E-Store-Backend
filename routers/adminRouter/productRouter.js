const express = require('express');
const { addProduct } = require('../../controller/productController');
const multer = require('multer');
const Storages = require("../../multer/multer")

const upload = multer({storage:Storages.productPictureUpload()})
const router = express.Router()


router.post('/add',upload.any(),addProduct)


module.exports = router;