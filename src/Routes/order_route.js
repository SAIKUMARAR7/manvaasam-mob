var express=require('express');
const router= express.Router();
const views=require('../controllers/order')
const verify=require('../Middleware/middleware')


router.post('/addorder',verify.authenticateToken,views.addorder)
router.post('/myorders',verify.authenticateToken,views.myorders)

router.get('/allorders',views.allorders)
router.get('/updatestatus',views.updatestatus)

module.exports=router