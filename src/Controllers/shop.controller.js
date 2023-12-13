import fs from 'fs/promises'; // Módulo de manejo de archivos para Node.js


const shopController = {
    shop:    async   ( req, res ) =>{
       
          // Leer el contenido del archivo JSON
          const jsonContent = await fs.readFile("db.json", 'utf-8');
    
          // Parsear el contenido JSON
          const data = JSON.parse(jsonContent);
    
          // Renderizar la vista con los datos (puedes pasar 'data' como variable a la vista)
          res.render('./shop/shop', { data });

    } ,
        
    itemGet:   async ( req, res ) =>{

        const jsonContent = await fs.readFile("db.json", 'utf-8');
        const data = JSON.parse(jsonContent);
        res.render('./shop/item', { data });

    } ,


    itemPost:   ( req, res ) => res.send(" Route for Shop View for ID for ADD "),
    cartGet:    ( req, res ) => res.render('./shop/cart'),
    cartPost:   ( req, res ) => res.send(" Route for Shop Cart POST View"),
}

export {shopController}