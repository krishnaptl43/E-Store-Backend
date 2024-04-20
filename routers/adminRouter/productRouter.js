const express = require('express');
const { addProduct } = require('../../controller/productController');
const multer = require('multer')
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})
const upload = multer({storage:Storage})
const router = express.Router()


router.post('/add',upload.any(),addProduct)


module.exports = router;