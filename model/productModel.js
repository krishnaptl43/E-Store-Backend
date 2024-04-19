const {Schema,model} = require('mongoose')

const schema = new Schema({
    product_name : {
        type : String,
        required : true,
        unique:true
    },
    price : {
        type : Number,
        required : true,
    },
    brand: {
        type : Schema.Types.ObjectId,
        required : true,
        ref:"Brand"
    },
    category : {
        type : Schema.Types.ObjectId,
        required : true,
        ref:"Category"
    },
    adder : {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    images : {
        type : Array,
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