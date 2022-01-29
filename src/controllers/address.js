const models = require('../models/address_model');
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

async function addaddress(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    if(User){
        const addressid=v4()
        address.create({addressid:addressid,userid:User.userid,Address:req.body.address})
        const response = new ResponseBody(true, "address added successfully", {});
        res.send(response);
    }
    else{
        const response = new ResponseBody(false, "User not found", {});
        res.send(response);
    }
    }
    catch(e){
        errorinuser('addaddress',e)
    }
    }


async function deleteaddress(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    if(User){
        address.destroy({where:{userid:User.userid}})
        const response = new ResponseBody(true, "address deleted successfully", {});
        res.send(response);
    }
    else{
        const response = new ResponseBody(false, "User not found", {});
        res.send(response);
    }
    }
    catch(e){
        errorinuser('addaddress',e)
    }

    }

    async function updateaddress(req,res){
        try{
        const User=await user.findOne({where:{email:req.body.email}});
        if(User){
            await address.update({Address:req.body.address},{where:{userid:User.userid}})
            const response = new ResponseBody(true, "address updated successfully", {});
            res.send(response);
        }
        else{
            const response = new ResponseBody(false, "User not found", {});
            res.send(response);
        }
        }
        catch(e){
            errorinuser('updateaddress',e)
        }
    
        }
    
    

module.exports={addaddress,deleteaddress,updateaddress}