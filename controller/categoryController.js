const categoryModel = require("../model/categoryModel")
const ApiResponse = require('../ApiResponse/apiResponse')

async function addCategory(req,res){
   const {cate_name} = req.body
   try {
    if(!cate_name){
        res.json(new ApiResponse(false,null,"please enter category"))
    }else{
        let cateData = await categoryModel.create({cate_name})
        if(cateData !==null){
            res.json(new ApiResponse(true,cateData,"category add successfully"))
        }
    }

   } catch (error) {
    res.json(new ApiResponse(false,null,error.message))
   }
}

module.exports = {addCategory}