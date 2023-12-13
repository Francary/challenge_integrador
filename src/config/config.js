import {config} from "dotenv"
import { Sequelize } from "sequelize"

config()

const env = {
    PORT: process.env.PORT ,
    JWT_SECRET: process.env.JWT_SECRET,
}

const sequelize = new Sequelize('funko','root', '',{
    host: process.env.DB_HOST,
    dialect: 'mysql'
})


export  {
    env,
    sequelize,
}