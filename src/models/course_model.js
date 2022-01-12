const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=course=sequelize.define('courses',{
    courseid:{type:Sequelize.STRING,primaryKey:true,unique:true,allowNull:false},
    name:{type:Sequelize.STRING,allownull:false},
    instructor:{type:Sequelize.STRING,allowNull:true},
    price:{type:Sequelize.INTEGER,allowNull:false},
    image:{type:Sequelize.BLOB('medium'),allowNull:true}},{modelName:"courses"})

sequelize.sync()