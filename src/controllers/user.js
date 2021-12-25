const models = require('../models/user_model');
bcrypt=require('bcrypt')
const {generateOtp}=require('../utils/otp')
const {v4}=require('uuid');
const {sendmail}=require('../utils/sendEmail')
require("dotenv").config();
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)
}
async function registeruser(req,res){
    try{
    const userId = v4();
    var name=req.body.name
    var email=req.body.email
    var mobile=req.body.mobile
    var userpassword=req.body.password
    if (!(email && userpassword && name && email)) {
        const response = new ResponseBody(false, "All input is required", {});
        res.status(400).send(response);
    }
    const oldUser = await user.findOne({where:{email:req.body.email}});

    if (oldUser) {
        const response = new ResponseBody(false, "User Already Exist. Please Login", {});
        return res.status(409).send(response);
    }
    else{
        const otp=generateOtp(req.body.email)
        var mailOptions = {
            to: req.body.email,
            subject: "Otp for manvaasm application registration is: ",
            html: "<h3>OTP for  manvaasm account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
        };
        sendmail(mailOptions)
        
        const password = await bcrypt.hash(req.body.password,parseInt(process.env.SALT_ROUNDS))
        user.create({userid:userId,name:name,email:email,mobile:mobile,password:password,verified:false})
        const response = new ResponseBody(true, "otp sented successfully", {});
        res.send(response)
    }
}
    catch(e){
        errorinuser('userregistration',e)
    }

    }

async function profile(req,res){
    try{
        User=await user.findOne({where:{email:req.body.email}})
        user_profile={name:User.name,email:User.email,mobile:User.mobile}
        const response = new ResponseBody(true, "profile fetched sucessfully",user_profile);
        res.send(response)
    }
    catch(e){
        errorinuser('user_profile',e)
    }
}

async function home_page(req,res){
    try{
        products=await product.findAll({limit:4,order:[['createdAt','DESC']]})
        courses=await course.findAll({limit:4,order:[['createdAt','DESC']]})
        const response = new ResponseBody(true, "profile fetched sucessfully",{products,courses});
        res.send(response)
    }
    catch(e){
        errorinuser('home_page',e)
    }

    }

    function demo(req,res){
        try{
            const response = new ResponseBody(true, "sucess");
            res.send(response)
        }
        catch(e){
            errorinuser('demo',e)
        }
    
        }
    
    
module.exports={registeruser,profile,home_page,demo}