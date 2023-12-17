import { sequelize } from "../config/config.js";
import { DataTypes } from "sequelize";


const ProductModel = sequelize.define('product' ,{
    product_name: DataTypes.STRING ,
    product_description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    discount: DataTypes.STRING,
    sku: DataTypes.STRING,
    dues: DataTypes.STRING,
    image_front: DataTypes.TEXT,
    image_back: DataTypes.TEXT,
    licence_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
})

export { ProductModel } 

