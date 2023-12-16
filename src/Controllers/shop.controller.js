import fs from 'fs/promises'; // Módulo de manejo de archivos para Node.js
import { getAll, getOne } from '../models/product.model.js';

const shopController = {
    shop:    async   ( req, res ) =>{
       
        // Leer el contenido del archivo JSON
        //   const jsonContent = await fs.readFile("db.json", 'utf-8');
        // Parsear el contenido JSON
        //   const data = JSON.parse(jsonContent);

        const data = await getAll()
         
        res.render('./shop/shop', { data });

    } ,
        
    itemGet:   async ( req, res ) =>{
        const data = await getAll()
        
        const itemId = req.params.id
        const item = await getOne(itemId)
        
        res.render('./shop/item', { data , item });

    } ,


    itemPost:   ( req, res ) => res.send(" Route for Shop View for ID for ADD "),
    cartGet:    ( req, res ) => res.render('./shop/cart'),
    cartPost:   ( req, res ) => res.send(" Route for Shop Cart POST View"),
}

export {shopController}