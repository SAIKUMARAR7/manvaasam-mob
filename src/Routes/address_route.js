var express=require('express');
const router= express.Router();
const views=require('../controllers/address')
const verify=require('../Middleware/middleware')

router.post('/addaddress',verify.authenticateToken,views.addaddress)
router.post('/deleteaddress',verify.authenticateToken,views.deleteaddress)

router.post('/updateaddress',verify.authenticateToken,views.updateaddress)



module.exports=router