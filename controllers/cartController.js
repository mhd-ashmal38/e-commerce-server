const carts = require('../models/cartSchema');

exports.addToCart = async (req, res) => {
    try {
        // Extract product details from request body
        const { productId,name,price,stock, quantity,image} = req.body;

        // Create a new cart item
        const cartItem = new carts({
            productId: productId,
            name:name,
            price:price,
            stock:stock,
            quantity: quantity,
            image:image
        });

        // Save the cart item to the database
        const savedCartItem = await cartItem.save();

        res.status(200).json(savedCartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get all cart items
exports.getAllCart=async(req,res)=>{
    try{
        const allCart=await carts.find()
        res.status(200).json(allCart)
    }catch(err){
        res.status(401).json(err)
    }
}

// Delete cart item by ID
exports.deleteCartItem = async (req, res) => {
    try {
        const cartItemId = req.params.id;
        // Find and delete the cart item
        await carts.findByIdAndDelete(cartItemId);
        res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
