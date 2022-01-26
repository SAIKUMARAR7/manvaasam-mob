const PORT=process.env.PORT ||5000;
const connection= require('./Dbconnection/connection');
const sequelize = require('./Dbconnection/connection');

const user=require('./Routes/user_route');
const address=require('./Routes/address_route');
const course=require('./Routes/course_route');
const product=require('./Routes/product_route');

const auth=require('./Routes/auth_route');
const order=require('./Routes/order_route');
const otp=require('./Routes/otp_route');
const password=require('./Routes/forgetpassword_route');
var express=require('express');
const bp=require('body-parser')
const app=express()


app.use(bp.json())
app.use('/user',user)
app.use('/address',address)
app.use('/course',course)
app.use('/product',product)
app.use('/purchasedcourses',purchasedcourses)
app.use('/order',order)
app.use('/auth',auth)
app.use('/otp',otp)
app.use('/password',password)

app.listen(PORT,function(err)
{
    console.log('connected')
})
