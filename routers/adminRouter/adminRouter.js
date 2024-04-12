const express = require('express');
const { addCategory, getAllCategories } = require('../../controller/categoryController');
const { verifyToken } = require('../../config/tokenManager');
const ApiResponse = require('../../ApiResponse/apiResponse');
const router = express.Router()

router.use("/",async (req,res,next)=>{
    let response =  await verifyToken(req)
    if(response.status){
        if(req.data.role === 'admin'){
            next()
        }else{
            res.json(new ApiResponse(false ,null, "This is a admin pannel you can not access "))
        }
    }else{
     res.json(new ApiResponse(false,null,response.msg))
    }
     
 })

router.post("/addcategory",addCategory)
router.get("/get_all_category",getAllCategories)


module.exports = router;