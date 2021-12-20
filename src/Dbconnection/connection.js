const { pool } = require('mssql');
const { Sequelize } = require('sequelize')
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 
  process.env.DB_PASSWORD, {
host: "manvaasamdb.cxogf0mzl3vx.ap-south-1.rds.amazonaws.com",
  port: process.env.DB_PORT,  
  dialect: "mysql",
  options:{
    trustServerCertificate: true
    },
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  },
  logging:false
}); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports =sequelize;
