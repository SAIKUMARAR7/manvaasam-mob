var express=require('express');
const router= express.Router();
const views=require('../controllers/course')
const verify=require('../Middleware/middleware')
const views_buy=require('../controllers/purchasedCourses')



router.post('/addcourse',verify.authenticateToken,views.addcourse)
router.get('/getallcourses',views.getallcourses)
router.post('/deleteCourse',verify.authenticateToken,views.deleteCourse)

router.post('/getCourse',verify.authenticateToken,views.getCourse)

router.post('/purchasecourse',verify.authenticateToken,views_buy.addpurchasedcourses)


router.post('/mycourses',verify.authenticateToken,views_buy.mycourses)
module.exports=router