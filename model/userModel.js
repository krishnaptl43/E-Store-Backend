const {Schema,model} = require('mongoose')

const schema = new Schema({
    user_name : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true,
        unique : [true,"mobile number is already exists"]
    },
    email: {
        type : String,
        required : true,
        unique: [true,"email id  is already exists"]
    },
    password : {
        type : String,
        required : [true,"password feild is require"]
    },
    cart : {
        type : Schema.Types.Array
    },
    isActive : {
        type : Boolean,
        default : true
    },
    orders : {
        type : Schema.Types.Array
    },
    role : {
        type : String,
        default : "user"
    }
},{timestamps : true})

const userModel = model("User",schema)

module.exports = userModel;