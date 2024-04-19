const express = require('express');
const { addProduct } = require('../../controller/productController');
const multer = require('multer')
const upload = multer()
const router = express.Router()


router.post('/add',upload.any("uploads"),addProduct)


module.exports = router;