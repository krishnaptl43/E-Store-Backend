const categoryModel = require("../model/categoryModel")
const ApiResponse = require('../ApiResponse/apiResponse')

async function addCategory(req,res){
   const {cate_name} = req.body
   try {
    if(!cate_name){
        res.json(new ApiResponse(false,null,"please enter category"))
    }else{
        let cateData = await categoryModel.create({cate_name,last_modify:req.data.id})
        if(cateData !==null){
            res.json(new ApiResponse(true,cateData,"category add successfully"))
        }
    }

   } catch (error) {
    res.json(new ApiResponse(false,null,error.message))
   }
}

async function getAllCategories(req,res){
    try {
    
         let getData = await categoryModel.find({isDeleted:false}).populate('last_modify',"_id user_name role")
         if(getData !==null){
             res.json(new ApiResponse(true,getData,"success"))
         }
     }catch (error) {
     res.json(new ApiResponse(false,null,error.message))
    }
 }

module.exports = {addCategory,getAllCategories}