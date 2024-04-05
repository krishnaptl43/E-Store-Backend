const {Schema,model} = require('mongoose')

const schema = new Schema({
    cate_name : {
        type : String,
        unique : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    adder : {
        type : Schema.Types.ObjectId,
        ref: "user"
    }
})

const categoryModel = model('Category',schema)

module.exports = categoryModel;