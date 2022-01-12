const models = require('../models/product_model');
var express=require('express');
const router= express.Router();
const app=express()
const {v4}=require('uuid');
const path=require('path');
var fs=require('fs')
const {ResponseBody} = require('../utils/response');
const formidable = require('formidable');
const zlib=require('zlib')
var LZUTF8 = require('lzutf8');
function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

 async function addproduct(req,res){
    try{
        let form=new formidable.IncomingForm();
        form.keepExtension=true;
      form.parse (req, (err,fields,files)=>
        {
            var image=fs.readFileSync(files.image.filepath);
            const productid = v4();
            var productname=fields.productname
            var price=fields.price
            var description=fields.description

           product.create({productid:productid,name:productname,price:price,description:description,image:image})
            const response = new ResponseBody(true, "product added successfully", {name:productname});
            res.send(response);
                
              

            
        })
    }
  
    catch(e){
        errorinuser('addproduct',e)
    }


     }

     

async function getallproducts(req,res){
    try{
        var products=await product.findAll()
        
        const response = new ResponseBody(true, "product fetched successfully", products);
        res.send(response)
    }
    catch(e)
    {
        errorinuser('getallproducts',e)
    }

    }

    async function getproduct(req,res){
        try{
            const products = await product.findOne({where:{productid:req.body.productid}})
            const response = new ResponseBody(true, "product fetched successfully", products);
            res.send(response)
        }
        catch(e)
        {
            errorinuser('getproduct',e)
        }
    
        }
    

const deleteProduct = async(req,res) => {
    try{
        const find = await product.findOne({where:{productid:req.body.productid}})
        if(find){
            const products =  product.destroy({where:{productid:req.body.productid}})
            const response = new ResponseBody(true, "product deleted successfully", products);
            res.send(response)
        }
        else{
            const response = new ResponseBody(false, "product not found",{});
            res.send(response)
        }
       
    }
    catch(e){
        errorinuser("deleteProduct",e)
    }
}
    

module.exports={addproduct,getallproducts,deleteProduct,getproduct}

   