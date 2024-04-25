const multer = require("multer");

class Storages{
    userPictureUpload(){
        return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/user/")
        },
        filename: (req, file, cb) => {
            cb(null,file.originalname)
        }
    })
}
    productPictureUpload(){
        return  multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/products/")
        },
        filename: (req, file, cb) => {
            cb(null,file.originalname)
        }
    })

}

}

module.exports = new Storages;