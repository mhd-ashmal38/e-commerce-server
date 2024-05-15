const mongoose = require('mongoose');
const products = require('../models/productSchema')

// add product
exports.addProduct = async (req, res) => {
    try {
        const { id, name, price, category, type, stock, img1, img2, img3, img4, description } = req.body;

        // Create a new product document
        const newProduct = new products({
            id,
            name,
            price,
            category,
            type,
            stock,
            img1,
            img2,
            img3,
            img4,
            description
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error' }); // Send a generic error message
    }
};


// get all products
exports.getAllProductcontrollers = async (req, res) => {
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(401).json(err)
    }
}


//to get a single product
exports.getAproduct = async (req, res) => {

    const { id } = req.params

    try {
        const product = await products.findOne({ id })
        res.status(200).json(product)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete product by id
exports.deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct = await products.findByIdAndDelete({_id:id});
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Edit product by ID
exports.editProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProductData = req.body;

        // Find the product by ID and update it
        const updatedProduct = await products.findOneAndUpdate({ id: productId }, updatedProductData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
