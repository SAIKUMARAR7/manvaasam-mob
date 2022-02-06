const models = require('../models/purchasedCourses_model');
var express=require('express');
const router= express.Router();
const app=express()
const {v4}=require('uuid');
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function addpurchasedcourses(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    var courseid=req.body.courseid
    var userid=User.userid
    var ispurchased=await purchasedcourses.findAll({attributes:['courseid'],where:{userid:User.userid,courseid:courseid}})
    
     if(ispurchased.length>=1)
     {
        const response = new ResponseBody(false, "You have already registered this course", {});
        res.send(response)
        
    }
     else{
    var course_orderid=v4()
    purchasedcourses.create({course_orderid:course_orderid,userid:userid,courseid:courseid})
    const response = new ResponseBody(true, "course purchased successfully", {});
    res.send(response)
    }
}
    catch(e){
        errorinuser('addpurchasedcourses',e)
    }

    }

async function mycourses(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const My_Course = await purchasedcourses.findAll({where:{userid:User.userid}});
    const response = new ResponseBody(true, "courses fetched  successfully",My_Course );
    res.send(response)
    }
    catch(e){
        errorinuser('mycourses',e)
    }

    }
module.exports={addpurchasedcourses,mycourses};


   