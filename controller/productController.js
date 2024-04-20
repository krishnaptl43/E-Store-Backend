const ApiResponse = require("../ApiResponse/apiResponse")
const productModel = require("../model/productModel")
const path = require('path')
const fs = require('fs')

async function addProduct(req,res) {
    const { product_name, price, brand, category, stock, description, discountPercentage } = req.body
    try {
        const url = req.protocol + '://' + req.get("host");
        let respsData = await productModel.create({ product_name, price, brand, category, stock,thumbnail:url+"/uploads/"+req.files[0].originalname, description, discountPercentage, adder: req.data.id })
        if (!respsData) {
            res.json(new ApiResponse(false, null, "product not added"))
        } else {
            res.json(new ApiResponse(true, respsData, "success"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }
}

async function getAllProduct(req, res) {
    try {
    const data = await productModel.find().populate(['brand','category'])
    if(!data){
        res.json(new ApiResponse(false,null,"failed to load product"))
    }else{
        res.json(new ApiResponse(true,data,"success"))
    }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }
}

module.exports = { addProduct,getAllProduct };