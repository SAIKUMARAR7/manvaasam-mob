const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=orders=sequelize.define('alldatabase',{
    id:{type:Sequelize.STRING},
    db_id:{type:Sequelize.STRING},
db_name:{type:Sequelize.STRING},
allow_connections:{type:Sequelize.BOOLEAN},
connection_limit:{type:Sequelize.STRING}
},{modelName:"orders"});
    


sequelize.sync()