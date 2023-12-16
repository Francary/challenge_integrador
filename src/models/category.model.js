import { sequelize } from "../config/config.js";

const getAllCategory = async () => {
    const [dbdata] = await sequelize.query('SELECT * FROM category;')
    return dbdata
}

export {
    getAllCategory,
}