const jwtToken = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECREAT
class JWT {
   async generateToken(data){
      let token = await jwtToken.sign(data,secret,{expiresIn:"1h"})
      return token;
    }

    verifyToken(){

    }
}

module.exports = new JWT;