const jwtToken = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECREAT
class JWT {
    generateToken(data){
      let token = jwtToken.sign(data,secret,{expiresIn:"1h"})
      return token;
    }

    verifyToken(req){
     return new Promise((resolve,reject)=>{
        let authHeader = req.headers['authorization']
        let token = authHeader && authHeader.split(' ')[1]
        if(token == null){
          resolve({status:false,msg:"This is a private api so you have enter token in this api"})
        }else{
          jwtToken.verify(token,secret,(err,data)=>{
             if(err){
              resolve({status:false,msg:"Invalid or Expire token !"})
             }else{
               req.data = data
               resolve({status:true,msg:"token verified!"})
             }
          })
        }

     })
    }
}

module.exports = new JWT;