import {config} from "dotenv"
import { Sequelize } from "sequelize"

config()

const env = {
    PORT: process.env.PORT ,
    JWT_SECRET: process.env.JWT_SECRET,
}

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: 3310,  
    dialect: 'mysql'
})


export  {
    env,
    sequelize,
}