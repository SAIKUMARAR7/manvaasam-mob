const models = require('../models/course_model');
var express=require('express');
const router= express.Router();
const app=express()
const {v4}=require('uuid');
const {ResponseBody} = require('../utils/response')
const path=require('path');
var fs=require('fs')
const formidable = require('formidable');

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addcourse(req,res){  
    try{
        let form=new formidable.IncomingForm();
        form.keepExtension=true;
        form.parse(req,(err,fields,files)=>
        {
            var image=fs.readFileSync(files.image.filepath); 
            const courseid=v4()
            var coursename=fields.coursename
            var instructor=fields.instructor
            
            course.create({courseid:courseid,name:coursename,instructor:instructor,image:image})
            const response = new ResponseBody(true, "course added successfully", {"name":coursename});
            res.send(response)
        });
    }
    catch(e){
        errorinuser('addcourse',e)
    }

    }
async function getallcourses(req,res){  
    try{
        
    var courses=await course.findAll()
    const response = new ResponseBody(true, "course fetched successfully",courses);
    res.send(response)
    }
    catch(e){
        errorinuser('getallcourses',e)
    }

    }

const deleteCourse = async(req,res) => {
    try{
        const find = await course.findOne({where:{courseid:req.body.courseid}});
        if(find){
            const courses = course.destroy({where:{courseid:req.body.courseid}})
            const response = new ResponseBody(true, "course deleted successfully",courses);
            res.send(response)
        }
        else{
            const response = new ResponseBody(false, "course not found",{});
            res.send(response)
        }
        
    }
    catch(e){
        errorinuser('getallcourses',e)
    }
}

module.exports={addcourse,getallcourses,deleteCourse}
   