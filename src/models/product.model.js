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

const create = async (params) =>{
    try {
        const [product] = await sequelize.query('INSERT INTO product ( product_name , product_description, price, stock, discount, sku, dues,image_front, image_back, licence_id, category_id ) VALUES ?', {
            replacements: [params], 
            type: sequelize.QueryTypes.INSERT
        });
        return product
    } catch (error) {
        return error
        
    }

}
const editItem = async (params, itemId) => {
    try {
              
        const [product] = await sequelize.query(
            'UPDATE product SET product_name=?, product_description=?, price=?, stock=?, discount=?, sku=?, dues=?, image_front=?, image_back=?, licence_id=?, category_id=? WHERE product_id=?',
            {
                replacements: [
                    params.product_name,
                    params.product_description,
                    params.price,
                    params.stock,
                    params.discount,
                    params.sku,
                    params.dues,
                    params.image_front,
                    params.image_back,
                    params.licence_id,
                    params.category_id,
                    itemId
                ],
                type: sequelize.QueryTypes.UPDATE
        });
        return product
    } catch (error) {
        return error
        
    }

}

const deleteItem = async (params) =>{
    try {
        console.log('Parámetros recibidos:', params)
        const deleteProduct = await sequelize.query( 'DELETE FROM product WHERE product_id = ?', {
            replacements: [params.product_id], 
            type: sequelize.QueryTypes.DELETE
        });
        return deleteProduct
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
        
    }

}



export {
    getAll,
    getOne,
    create,
    deleteItem,
    editItem,

}

