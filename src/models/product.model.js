import { sequelize } from "../config/config.js";

const getAll = async () => {
    const [dbdata] = await sequelize.query('SELECT * FROM product;')
    return dbdata

}




const getOne = async (id) => {
    const [dbdata] = await sequelize.query('SELECT * FROM product WHERE product_id=?', {
        replacements:[id], 
        type: sequelize.QueryTypes.SELECT
    });

    return dbdata;
}

export {
    getAll,
    getOne,

}

