const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    img1:{
        type:String,
        required:true
    },
    img2:{
        type:String,
        required:true
    },
    img3:{
        type:String,
        required:true
    },
    img4:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const products=mongoose.model('products',productSchema)

module.exports=products