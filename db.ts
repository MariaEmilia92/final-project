import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
require('dotenv').config()


const { 
    SQL_DB_USER, 
    SQL_DB_PASS, 
    SQL_DB_HOST, 
    SQL_DB_PORT,
    SQL_DB_NAME, 
    NOSQL_DB_HOST, 
    NOSQL_DB_PORT, 
    NOSQL_DB_NAME 
} = process.env; 

mongoose.connect(`mongodb://${NOSQL_DB_HOST}:${NOSQL_DB_PORT}/${NOSQL_DB_NAME}`)

const mongooseDb = mongoose.connection;
const sequelizeDb = new Sequelize(`mysql://${SQL_DB_USER}:${SQL_DB_PASS}@${SQL_DB_HOST}:${SQL_DB_PORT}/${SQL_DB_NAME}`, {
    dialect: 'mysql'
});

export {
    sequelizeDb,
    mongooseDb
} 