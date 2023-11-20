const fs = require('fs/promises');

const mainController ={

    home:    async   ( req, res ) =>{
        const jsonContent = await fs.readFile("db.json", 'utf-8');
        const data = JSON.parse(jsonContent);

        res.render('index', { data }) 

    },
    
    contact:    ( req, res ) =>  res.render('./shop/contact'),
    about:      ( req, res ) =>  res.send(" Route for About View"),
    faqs:       ( req, res ) =>  res.send(" Route for Faqs View"),
}

module.exports = {mainController}