// wishlistSchema.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' // Assuming 'Product' is the name of your product model
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
    img1: {
        type: String,
        required: true
    }
});

const Wishlists = mongoose.model('Wishlists', wishlistSchema);

module.exports = Wishlists;
