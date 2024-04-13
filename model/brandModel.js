const {Schema,model} = require('mongoose')

const schema = new Schema({
    brand_name : {
        type : String,
        unique : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    last_modify : {
        type : Schema.Types.ObjectId,
        ref: "user"
    }
})

const brandModel = model('Brand',schema)

module.exports = brandModel;