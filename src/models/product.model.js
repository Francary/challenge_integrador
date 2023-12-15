import { sequelize } from "../config/config.js";

const getAll = async () => {
    // const [dbdata] = await sequelize.query('SELECT * FROM product;')
    const [dbdata] = await sequelize.query('SELECT product.* , category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;')
    return dbdata

}




const getOne = async (id) => {
    // const [dbdata] = await sequelize.query('SELECT * FROM product WHERE product_id=?', {
    const [dbdata] = await sequelize.query('SELECT product.* , category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id=? ;', {
        replacements:[id], 
        type: sequelize.QueryTypes.SELECT
    });

    return dbdata;
}

export {
    getAll,
    getOne,

}

