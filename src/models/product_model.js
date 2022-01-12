const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export= product=sequelize.define('products',{
    productid:{type:Sequelize.STRING,primaryKey:true,unique:true,allowNull:false},
    name:{type:Sequelize.STRING,allownull:false},
    price:{type:Sequelize.INTEGER,allowNull:false},
    description:{type:Sequelize.TEXT,allowNull:true},
    image:{type:Sequelize.BLOB('medium'),allowNull:true}},{modelName:"product"})
    //image:{type:Sequelize.STRING,allowNull:true}},{modelName:"product"})
sequelize.sync()