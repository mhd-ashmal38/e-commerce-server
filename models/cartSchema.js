const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    name: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const carts = mongoose.model('carts', cartSchema);

module.exports = carts;
