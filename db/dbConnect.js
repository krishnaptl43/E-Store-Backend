const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

function connectToDb (){
    return new Promise(async (resolve,reject)=>{
        try {
            let res = await mongoose.connect(MONGO_URI)
         if(res){
            resolve({status:true})
         }
        } catch (error) {
            resolve({status:false,error})
        }
        
    })
}

module.exports = connectToDb;