var express=require('express');
const router= express.Router();
const views=require('../controllers/product')
const verify=require('../Middleware/middleware')
const product=require('../Middleware/product')



// router.post('/addproduct',verify.authenticateToken,views.addproduct)
router.post('/addproduct',product.product_middleware,views.addproduct)
router.get('/getallproducts',views.getallproducts)
router.post('/deleteProduct',verify.authenticateToken,views.deleteProduct)

module.exports=router