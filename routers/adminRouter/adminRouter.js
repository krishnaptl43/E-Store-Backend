const express = require('express');
const { addCategory, getAllCategories, delCategory } = require('../../controller/categoryController');
const { verifyToken } = require('../../config/tokenManager');
const ApiResponse = require('../../ApiResponse/apiResponse');
const { addBrand, getAllBrands, delBrand } = require('../../controller/brandController');
const productRouter = require('./productRouter')
const router = express.Router()

router.use("/", async (req, res, next) => {
    let response = await verifyToken(req)
    if (response.status) {
        if (req.data.role === 'admin') {
            next()
        } else {
            res.json(new ApiResponse(false, null, "This is a admin pannel you can not access "))
        }
    } else {
        res.json(new ApiResponse(false, null, response.msg))
    }

})

router.use("/product", productRouter)
router.post("/addcategory", addCategory)
router.get("/get_all_category", getAllCategories)
router.delete("/delete_cate/:id", delCategory)
router.post("/addbrand", addBrand)
router.get("/get_all_brands", getAllBrands)
router.delete("/delete_brand/:id", delBrand)


module.exports = router;