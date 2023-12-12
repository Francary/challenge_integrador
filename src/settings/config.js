import {config} from "dotenv"

config()

const env = {
    PORT: process.env.PORT ,
    JWT_SECRET: process.env.JWT_SECRET,
}

export  {env}