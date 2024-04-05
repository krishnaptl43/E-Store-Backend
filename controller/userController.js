const ApiResponse = require("../ApiResponse/apiResponse")
const userModel = require("../model/userModel");
const { encrypt, verify } = require("../utils/passwordManager");
require('dotenv').config()
const saltRound = parseInt(process.env.SALT_ROUND)

async function registerUser(req, res) {

   const { user_name, email, mobile } = req.body
   let hashPassword;
   try {

      // if(!email || !password || !user_name || !mobile ){
      //    res.json(new ApiResponse(false,null, "register failed please enter require feilds"))
      // }

      hashPassword = await encrypt({  pass : req.body.password, saltRound })

      let data = await userModel.create({ user_name, email, password: hashPassword, mobile })

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

async function loginUser(req, res) {
   const { email, password } = req.body

   try {

      if (!email) {
         res.json(new ApiResponse(false, null, "please enter email id"))
      }

      if (!password) {
         res.json(new ApiResponse(false, null, "please enter password"))
      }

      let user = await userModel.findOne({ email })

      if (!user) {
         res.json(new ApiResponse(false, null, "user not found"))
      }
      let isMatch = await verify({ password, hash: user.password })

      if (!isMatch) {
         res.json(new ApiResponse(false, null, "password incorrect"))
      }
      let obj = user.toObject()
      delete obj.password
      delete obj.__v
      res.json(new ApiResponse(true, obj, "user login successfully"))

   } catch (error) {
      res.json(new ApiResponse(false, null, error.message))
   }
}



module.exports = { registerUser, loginUser }