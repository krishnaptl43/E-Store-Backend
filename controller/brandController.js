const brandModel = require("../model/brandModel")
const ApiResponse = require('../ApiResponse/apiResponse')

async function addBrand(req,res){
   const {brand_name} = req.body
   try {
    if(!brand_name){
        res.json(new ApiResponse(false,null,"please enter brand name"))
    }else{
        let brandData = await brandModel.create({brand_name,last_modify:req.data.id})
        if(brandData !==null){
            res.json(new ApiResponse(true,brandData,"brand added successfully"))
        }
    }

   } catch (error) {
    res.json(new ApiResponse(false,null,error.message))
   }
}

async function getAllBrands(req,res){
    try {
    
         let brandData = await brandModel.find({isDeleted:false}).populate('last_modify',"_id user_name role")
         if(brandData !==null){
             res.json(new ApiResponse(true,brandData,"success"))
         }
     }catch (error) {
     res.json(new ApiResponse(false,null,error.message))
    }
 }

 async function delBrand(req,res){
    const {id} = req.params
    try{
        let isDel = await brandModel.findByIdAndUpdate(id,{isDeleted:true})
        if(isDel !== null){
           res.json(new ApiResponse(true,null,"brand deleted successfully"))
        }
    }catch(err){
       res.json(new ApiResponse(false,null,err.message))
    }
}

module.exports = {addBrand,getAllBrands,delBrand}