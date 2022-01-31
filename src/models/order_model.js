const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=orders=sequelize.define('orders',{
    orderid:{type:Sequelize.STRING,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    // productid:{type:Sequelize.INTEGER,allowNull:false},
    Items:{type:Sequelize.JSON,allowNull:false},
    Address:{type:Sequelize.STRING},
    Status:{type:Sequelize.STRING,allowNull:false}},{modelName:"orders"});
    


sequelize.sync()