const bcrypt = require('bcrypt')
class Bcrypt {

   async encrypt(data){
        const { saltRound , password} = data
      let encryptData = bcrypt.hash(password,saltRound)
      return encryptData
    }

    verify(){
      const match = bcrypt.compare()
    }
}

module.exports = new Bcrypt;