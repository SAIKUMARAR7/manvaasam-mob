const models = require('../models/user_model');
var express=require('express');
const router= express.Router();
const app=express()
bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function login(req,res)
{
    try{
        const User = await user.findOne({where:{email:req.body.email}});
        
        if(User)
        {
            if(User.verified){
            const cmp = await bcrypt.compare(req.body.password, User.password);
                if (cmp) {
                    const token = jwt.sign(
                        { userid:User.userid },process.env.JWT_KEY,
                        {expiresIn: "30h",}
                      );
                    const response = new ResponseBody(true, "Login successfull", {"Token":token});
                    res.send(response);
                } else {
                    const response = new ResponseBody(false, "Wrong username or password", {});
                    res.send(response);
                }
            }
            else{
                const response = new ResponseBody(false, "you need to verify your email", {});
                res.send(response)
            }
        } 
        else {
            const response = new ResponseBody(false, "Wrong username or password", {});
            res.send(response);
        }
    }
    catch(e){
        errorinuser('login',e)
    }
}

    
module.exports={login}