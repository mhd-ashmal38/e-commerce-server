const express=require('express')

const productController=require('../controllers/productController')

const userController=require('../controllers/userController')

const cartController=require('../controllers/cartController')

const wishlistController=require('../controllers/wishlistController')

const router=new express.Router()

// product
router.post('/products/add', productController.addProduct);

router.get('/products/all',productController.getAllProductcontrollers);

router.delete('/products/delete/:id', productController.deleteProduct);

router.get('/products/view/:id',productController.getAproduct);

// Update product
router.put('/edit-product/:id', productController.editProduct);

// // cart
router.post('/cart/add', cartController.addToCart);

router.get('/cart/all',cartController.getAllCart)

router.delete('/cart/delete/:id',cartController.deleteCartItem)

// // register

// router.post('/user/register',userController.registerController)

// login using post

router.post('/user/login',userController.loginController)

// wishlist
router.post('/wishlist/add', wishlistController.addToWishlist);

router.get('/wishlist/all',wishlistController.getAllWishlist)

router.delete('/wishlist/delete/:id',wishlistController.deleteWishlistItem)

module.exports=router