const models = require('../models/user_model');
const {verifyOtp}=require('../utils/otp')
const {ResponseBody} = require('../utils/response')
require("dotenv").config();
const jwt = require('jsonwebtoken');
async function verify(req,res)
{
    if (verifyOtp(req.body.otp,req.body.email)) {
        const User = await user.findOne({where:{email:req.body.email}});
        User.update({verified:true})
        const token = jwt.sign(
            { userid:User.userid },process.env.JWT_KEY,
            {expiresIn: "10h",}
        );
        const response = new ResponseBody(true, "You has been successfully registered", {token});
        res.send(response);
    }
    else {
        const response = new ResponseBody(false, 'otp is incorrect', {});
        res.send(response);
    }

}
 module.exports={verify}