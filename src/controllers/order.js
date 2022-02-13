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
    
        const orderlist=req.body.items;
        const status='Not yet delivered'
        const user_address=req.body.address
        // const orderedproduct=await product.findOne({where:{productid:req.body.productid}})
        // const amount=orderedproduct.price * parseInt(req.body.count)
        const orderid=v4()
        orders.create({orderid:orderid,userid:User.userid,productid:parseInt(req.body.productid),Items:orderlist,Status:status,Address:user_address})
        const response = new ResponseBody(true, "product ordered successfully", {});
        res.send(response)
    
    
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

    async function allorders(req,res){
        try{
        const allorders=await orders.findAll()
        const response = new ResponseBody(true, "orders fetched successfully", allorders);
        res.send(response)
        }
        catch(e){
            errorinuser('addorder',e)
        }
    
        }

        async function updatestatus(req,res){
            try{
            const orderid=await orders.findOne({where:{orderid:req.body.orderid}});
            if(orderid){
                await orders.update({Status:req.body.status},{where:{orderid:req.body.orderid}})
                const response = new ResponseBody(true, "Order Status updated successfully", {});
                res.send(response);
            }
            else{
                const response = new ResponseBody(false, "Order not found", {});
                res.send(response);
            }
            }
            catch(e){
                errorinuser('updatestatus',e)
            }
        
            }
        
        
    
module.exports={addorder,myorders,allorders,updatestatus}

   