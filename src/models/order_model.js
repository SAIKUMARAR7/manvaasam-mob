const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=orders=sequelize.define('orders',{
    orderid:{type:Sequelize.STRING,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    // productid:{type:Sequelize.INTEGER,allowNull:false},
    Items:{type:Sequelize.JSON,allowNull:false},
    Status:{type:Sequelize.BOOLEAN,allowNull:false}},{modelName:"orders"});
    


sequelize.sync()