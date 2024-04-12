const {Schema,model} = require('mongoose')

const schema = new Schema({
    cate_name : {
        type : String,
        unique : true,
        required : [true,"required !"]
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    last_modify : {
        type : Schema.Types.ObjectId,
        ref: 'User',
        require : [true,"required"]
    }
})

const categoryModel = model('Category',schema)

module.exports = categoryModel;