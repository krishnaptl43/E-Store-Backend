const ApiResponse = require("../ApiResponse/apiResponse");
const { generateToken } = require("../config/tokenManager");
const userModel = require("../model/userModel");
const { encrypt, verify } = require("../utils/passwordManager");
require('dotenv').config()
const saltRound = parseInt(process.env.SALT_ROUND || 10)

async function registerAdmin(req, res) {

    const { user_name, email, mobile,role } = req.body
    let hashPassword;
    try {
       
        if(! user_name || !email || !mobile || !role){
            res.json(new ApiResponse(false,null,"all feiled required"))
            return false
        }

       hashPassword = await encrypt({  pass : req.body.password, saltRound })
 
       let data = await userModel.create({ user_name, email, password: hashPassword, mobile,role })
 
       if (data !== null) {
          let Obj = data.toObject()
          delete Obj.password
          delete Obj.__v
 
          res.json(new ApiResponse(true, Obj, "register successfully"))
       }
 
    } catch (error) {
       res.json(new ApiResponse(false, null, error.message))
    }
 }

 async function loginAdmin(req, res) {
    const { email, password } = req.body
 
    try {
 
       if (!email) {
          res.json(new ApiResponse(false, null, "please enter email id"))
       }
 
       if (!password) {
          res.json(new ApiResponse(false, null, "please enter password"))
       }
 
       let user = await userModel.findOne({ email,role : "admin" })
 
       if (!user) {
          res.json(new ApiResponse(false, null, "admin not found"))
       }
       let isMatch = await verify({ password, hash: user.password })
 
       if (!isMatch) {
          res.json(new ApiResponse(false, null, "password incorrect"))
       }
       let obj = user.toObject()
       delete obj.password
       delete obj.__v
       let token = await generateToken({id:obj._id,name:obj.user_name,role:obj.role})
       obj.token = token
       res.json(new ApiResponse(true, obj, "admin login successfully"))
 
    } catch (error) {
       res.json(new ApiResponse(false, null, error.message))
    }
 }

 module.exports = { registerAdmin, loginAdmin};