const fs = require('fs/promises'); // Módulo de manejo de archivos para Node.js


const shopController = {
    shop:    async   ( req, res ) =>{
       
          // Leer el contenido del archivo JSON
          const jsonContent = await fs.readFile("db.json", 'utf-8');
    
          // Parsear el contenido JSON
          const data = JSON.parse(jsonContent);
    
          // Renderizar la vista con los datos (puedes pasar 'data' como variable a la vista)
          res.render('./shop/shop', { data });

    } ,
        
    itemGet:    ( req, res ) => res.render('./shop/item'),
    itemPost:   ( req, res ) => res.send(" Route for Shop View for ID for ADD "),
    cartGet:    ( req, res ) => res.render('./shop/cart'),
    cartPost:   ( req, res ) => res.send(" Route for Shop Cart POST View"),
}

module.exports = {shopController}