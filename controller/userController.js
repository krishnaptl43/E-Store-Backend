const userModel = require("../model/userModel")

async function registerUser(req,res){

   const {user_name,email,password,mobile}  = req.body

   try {
    
    let data = await userModel.create({user_name,email,password,mobile})

    if(data !==null){
     res.json(data)
    }
   } catch (error) {
    res.json({name: error.name,msg : error.message})
   }
}

async function loginUser(req,res){
   const {email,password}  = req.body

   try {
    
    let data = await user.create({})
   } catch (error) {
    
   }
}



module.exports = {registerUser,loginUser}