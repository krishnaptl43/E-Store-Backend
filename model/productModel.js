const {Schema,model} = require('mongoose')

const schema = new Schema({
    product_name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    brand: {
        type : Schema.Types.ObjectId,
        required : true,
    },
    category : {
        type : Schema.Types.ObjectId,
        required : true,
    },
    adder : {
        type : Schema.Types.ObjectId
    },
    images : {
        type : Array,
        default : true
    },
    stock : {
        type : Number,
        require : [true,"stock failed require"]
    },
    thumbnail : {
        type : String,
    },
    description : {
        type : String,
    },
    discountPercentage : {
        type : Number,
    },

},{timestamps : true})

const productModel = model("Product",schema)

module.exports = productModel;