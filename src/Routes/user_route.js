var express=require('express');
const router= express.Router();
const user=require('../controllers/user')
const verify=require('../Middleware/middleware')

router.post('/registeruser',user.registeruser);
router.post('/profile',verify.authenticateToken,user.profile);
router.post('/home_page',user.home_page);

module.exports=router;