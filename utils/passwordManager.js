const bcrypt = require('bcrypt')
class Bcrypt {
    encrypt(data){
        const { saltRound , str} = data
      let encryptData = bcrypt.hash(str,saltRound)
      return encryptData
    }

    verify(){
      const match = bcrypt.compare()
    }
}