const models = require('../models/order_model');
const productmodel = require('../models/product_model');
const address_models = require('../models/address_model');
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

async function addorder(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const useraddress=await address.findOne({where:{userid:User.userid}});
    if(useraddress)
    {
        const orderlist=req.body.userorder;
        const status='pending'
        // const orderedproduct=await product.findOne({where:{productid:req.body.productid}})
        // const amount=orderedproduct.price * parseInt(req.body.count)
        const orderid=v4()
        orders.create({orderid:orderid,userid:User.userid,productid:parseInt(req.body.productid),Items:orderlist,Status:status})
        const response = new ResponseBody(true, "product ordered successfully", {});
        res.send(response)
    }
    else
    {
        const response = new ResponseBody(true, "Please add your address before placing order", {});
        res.send(response)
    }
}
    catch(e){
        errorinuser('addorder',e)
    }

    }

async function myorders(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const myorders=await orders.findAll({where:{userid:User.userid}})
    // console.log(myorders)
    const response = new ResponseBody(true, "orders fetched successfully", myorders);
    res.send(response)
    }
    catch(e){
        errorinuser('addorder',e)
    }

    }
module.exports={addorder,myorders}

   