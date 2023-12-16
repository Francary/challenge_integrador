import { sequelize } from "../config/config.js";

const getAllLicence = async () => {
    const [dbdata] = await sequelize.query('SELECT * FROM licence;')
    return dbdata
}

export {
    getAllLicence,
}